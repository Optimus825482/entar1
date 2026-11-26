(() => {
  'use strict';

  const { THREE:T, OrbitControls } = window.MeritThree;

  window.createMeritHall = function createHall(canvas, units, layout, callbacks) {
    const renderer = new T.WebGLRenderer({canvas, antialias:true, alpha:false, powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new T.Scene();
    scene.background = new T.Color('#18130f');
    const camera = new T.PerspectiveCamera(41,1,.12,190);
    camera.position.set(27,48,52);
    const controls = new OrbitControls(camera,canvas);
    controls.target.set(0,0,-1);
    controls.enablePan = false;
    controls.enableDamping = false;
    controls.enableZoom = false;
    controls.minDistance = 3;
    controls.maxDistance = 135;
    controls.maxPolarAngle = Math.PI/2 - .012;
    canvas.style.touchAction = 'pan-y';

    scene.add(new T.HemisphereLight('#fff1df','#5e4631',2.15));
    const keyLight = new T.DirectionalLight('#fff0d3',2.3);
    keyLight.position.set(-8,22,6);
    scene.add(keyLight);
    const fillLight = new T.DirectionalLight('#d1ddff',.65);
    fillLight.position.set(9,13,-24);
    scene.add(fillLight);

    function material(color, options = {}) {
      return new T.MeshStandardMaterial({color,roughness:.81,...options});
    }

    const palette = {
      travertine:material('#aaa08c'), cream:material('#dfcbb0'),
      panel:material('#877762'), trim:material('#b99768',{metalness:.46}),
      riser:material('#382b22'), stage:material('#211d21'),
      glass:material('#a89981',{metalness:.32,roughness:.32}),
      goldLight:new T.MeshBasicMaterial({color:'#f6c78a'}),
      screen:new T.MeshBasicMaterial({map:screenTexture()})
    };

    const boxShape = new T.BoxGeometry(1,1,1);
    function block(parent, mat, w,h,d,x,y,z) {
      const mesh = new T.Mesh(boxShape,mat);
      mesh.position.set(x,y,z);
      mesh.scale.set(w,h,d);
      parent.add(mesh);
      return mesh;
    }

    function texture(width,height,draw) {
      const image = document.createElement('canvas');
      image.width = width;
      image.height = height;
      draw(image.getContext('2d'),width,height);
      const result = new T.CanvasTexture(image);
      result.colorSpace = T.SRGBColorSpace;
      return result;
    }

    function carpetTexture() {
      const rug = texture(256,256,(ctx,w,h) => {
        ctx.fillStyle = '#625b52';
        ctx.fillRect(0,0,w,h);
        for (let index=0; index<320; index++) {
          const x = (index * 7919) % w;
          const y = (index * index * 167 + index * 3) % h;
          ctx.fillStyle = ['#8a8070','#746553','#51483e','#8c8173'][index%4];
          ctx.fillRect(x,y,6+index%17,2+index%8);
        }
        ctx.strokeStyle = '#938578';
        ctx.lineWidth = 1.5;
        for (let index=0; index<4;index++) {
          ctx.save();
          ctx.translate((index%2)*128+64, Math.floor(index/2)*128+64);
          ctx.rotate(Math.PI/4);
          ctx.strokeRect(-34,-34,68,68);
          ctx.strokeRect(-26,-26,52,52);
          ctx.restore();
        }
      });
      rug.wrapS = rug.wrapT = T.RepeatWrapping;
      rug.repeat.set(13,9);
      rug.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(),8);
      return rug;
    }

    function screenTexture() {
      return texture(512,220,(ctx,w,h) => {
        const gradient = ctx.createLinearGradient(0,0,w,h);
        gradient.addColorStop(0,'#0a1733');
        gradient.addColorStop(.48,'#164b9d');
        gradient.addColorStop(1,'#050f29');
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,w,h);
        ctx.globalAlpha = .34;
        ctx.strokeStyle = '#80bcff';
        for (let i=0;i<10;i++) {
          ctx.beginPath();
          ctx.moveTo(0,190-i*13);
          ctx.bezierCurveTo(140,245-i*10,340,-26+i*8,w,48+i*14);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#f3d7a8';
        ctx.font = '24px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('M E R I T   R O Y A L',w/2,124);
      });
    }

    const floorWidth = layout.width;
    const floorDepth = layout.back - layout.front;
    const floorCenter = (layout.back + layout.front)/2;
    block(scene,palette.riser,floorWidth+.8,.55,floorDepth+8,0,-.47,floorCenter+2.6);
    block(scene,palette.travertine,floorWidth,.2,floorDepth,0,-.14,floorCenter);
    const rug = new T.Mesh(new T.PlaneGeometry(floorWidth-2.25,floorDepth-1.55),material('#ffffff',{map:carpetTexture()}));
    rug.rotation.x = -Math.PI/2;
    rug.position.set(0,-.025,floorCenter);
    scene.add(rug);
    for (const x of [-31.1,31.1]) block(scene,palette.trim,.12,.032,floorDepth-1,x,-.015,floorCenter);
    block(scene,palette.trim,62,.032,.14,0,-.015,19.45);

    const walls = [
      buildWall(0,layout.front,0,64,13,false),
      buildWall(-32,-.8,Math.PI/2,42,8,true),
      buildWall(32,-.8,-Math.PI/2,42,8,true),
      buildWall(0,layout.balcony+2.25,Math.PI,64,12,true)
    ];

    function buildWall(x,z,angle,width,bays,doors) {
      const wall = new T.Group();
      wall.position.set(x,0,z);
      wall.rotation.y = angle;
      scene.add(wall);
      block(wall,palette.panel,width,7.75,.42,0,3.8,0);
      for (const height of [.23,3.4,7.57]) block(wall,palette.cream,width,.27,.76,0,height,.3);
      const spacing = width / bays;
      for (let i=0;i<=bays;i++) {
        const at = i*spacing-width/2;
        block(wall,palette.cream,.43,7.3,.55,at,3.75,.37);
        block(wall,palette.trim,.12,4.7,.06,at,4.4,.675);
        block(wall,palette.cream,.66,.23,.75,at,7.32,.44);
        if (i === bays) continue;
        const center = at + spacing/2;
        block(wall,doors && (i%4===0) ? palette.stage : palette.travertine,spacing*.74,2.35,.10,center,1.58,.25);
        block(wall,palette.glass,spacing*.56,2.4,.09,center,5.31,.26);
        block(wall,palette.trim,spacing*.62,.11,.15,center,4.07,.31);
        if (i%2 === 0) block(wall,palette.goldLight,.18,.47,.16,center,3.3,.56);
      }
      return wall;
    }

    const stage = new T.Group();
    scene.add(stage);
    for (const [x,z,w,d] of [layout.stage,layout.runway,layout.apron]) {
      block(stage,palette.stage,w,.58,d,x,.29,z);
      block(stage,palette.trim,w+.03,.045,d+.03,x,.62,z);
      block(stage,palette.stage,w-.13,.05,d-.13,x,.65,z);
    }
    block(stage,palette.stage,15.6,6.25,.35,0,3.6,-20.35);
    const screen = new T.Mesh(new T.PlaneGeometry(13.9,5.25),palette.screen);
    screen.position.set(0,3.56,-20.1);
    stage.add(screen);
    block(stage,palette.stage,16.7,.26,.42,0,6.65,-19.89);
    for (const x of [-8,-6,-4,-2,0,2,4,6,8]) block(stage,palette.goldLight,.27,.14,.25,x,6.43,-19.63);
    for (const x of [-8.06,8.06]) {
      block(stage,palette.stage,.55,2.4,.63,x,4.9,-19.39);
      for (const y of [4.15,4.75,5.35]) block(stage,palette.panel,.44,.05,.65,x,y,-19.35);
    }
    for (const x of [-17,17]) {
      block(scene,palette.cream,.53,3.35,6.8,Math.sign(x)*31.15,3.15,.8);
      block(scene,palette.screen,.055,2.8,5.9,Math.sign(x)*30.85,3.15,.8);
    }
    block(scene,palette.riser,10,.56,4.65,1.4,.28,15.85);
    block(scene,palette.glass,8,.14,2.7,1.4,.62,15.85);

    const balcony = new T.Group();
    scene.add(balcony);
    block(balcony,palette.cream,62.9,.75,5.8,0,3.94,21.7);
    block(balcony,palette.trim,62.9,.12,.18,0,4.19,18.9);
    const balconyFloor = block(balcony,palette.panel,62.5,.09,5.55,0,4.34,21.75);
    balconyFloor.renderOrder = 0;

    const roof = new T.Group();
    scene.add(roof);
    block(roof,palette.cream,64,.3,46,0,7.85,.5);
    for (const x of [-22.8,-8,8,22.8]) block(roof,palette.trim,.13,.16,40,x,7.61,0);
    for (const z of [-16,-5,7,17]) block(roof,palette.trim,60,.16,.13,0,7.61,z);
    const hanging = new T.Group();
    scene.add(hanging);
    const chandelier = new T.CylinderGeometry(.85,.44,.38,14);
    for (const [x,z] of [[0,-9],[-17,-4],[17,-4],[-17,10],[17,10],[0,14]]) {
      block(hanging,palette.trim,.04,.62,.04,x,7.3,z);
      const lamp = new T.Mesh(chandelier,palette.goldLight);
      lamp.position.set(x,6.84,z);
      hanging.add(lamp);
      block(hanging,palette.trim,1.42,.07,.2,x,6.98,z);
    }

    const chairEntries = [];
    const dummy = new T.Object3D();
    const whiteMaterial = material('#fff9f0');
    const tables = units.filter(item => item.tier !== 'box');
    const boxes = units.filter(item => item.tier === 'box');
    const discs = new T.InstancedMesh(new T.CylinderGeometry(.69,.66,.59,20),whiteMaterial,tables.length);
    const seatMesh = new T.InstancedMesh(new T.BoxGeometry(.31,.28,.31),whiteMaterial,units.length*12);
    const backMesh = new T.InstancedMesh(new T.BoxGeometry(.32,.34,.085),whiteMaterial,units.length*12);
    const boxMesh = new T.InstancedMesh(boxShape,whiteMaterial,boxes.length);
    scene.add(discs,seatMesh,backMesh,boxMesh);
    function place(mesh,index,x,y,z,angle=0,w=1,h=1,d=1) {
      dummy.position.set(x,y,z);
      dummy.rotation.set(0,angle,0);
      dummy.scale.set(w,h,d);
      dummy.updateMatrix();
      mesh.setMatrixAt(index,dummy.matrix);
    }
    for (const [index,item] of tables.entries()) place(discs,index,item.x,.38,item.z);
    for (const [index,item] of boxes.entries()) {
      place(boxMesh,index,item.x,item.y+.06,item.z,0,4.67,.16,3.2);
      block(balcony,palette.cream,4.74,.56,.24,item.x,4.66,item.z-1.85);
      block(balcony,palette.trim,4.82,.07,.28,item.x,4.96,item.z-1.85);
      block(balcony,palette.cream,.12,.83,3.3,item.x-2.43,4.78,item.z-.08);
      block(balcony,palette.travertine,1.15,.49,.52,item.x,4.66,item.z+1.03);
    }
    function chairPosition(item,number) {
      if (item.tier === 'box') return {x:item.x+((number-1)%6-2.5)*.58,z:item.z-.53+Math.floor((number-1)/6)*.63,a:0};
      const a = (number - 1) * Math.PI/6;
      return {x:item.x+Math.sin(a)*.98,z:item.z+Math.cos(a)*.98,a};
    }
    for (const item of units) {
      for (let i=1;i<=12;i++) {
        const {x,z,a} = chairPosition(item,i);
        const index = chairEntries.length;
        chairEntries.push({item,number:i});
        place(seatMesh,index,x,item.y+.21,z,a);
        place(backMesh,index,x+Math.sin(a)*.12,item.y+.40,z+Math.cos(a)*.12,a);
      }
    }

    const tableLabels = makeLabels(units.map(item => ({text:item.num,x:item.x,y:item.y+(item.tier==='box'?.15:.685),z:item.z})),.45,.34,22,'#19120b');
    scene.add(tableLabels);
    let chairLabels;
    let labelUnit;
    function makeLabels(labels,w,h,size,color,lift=0) {
      const columns = 16;
      const cell = 48;
      const rows = Math.ceil(labels.length/columns);
      const atlas = texture(columns*cell,rows*cell,ctx => {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold ' + size + 'px sans-serif';
        ctx.fillStyle = color;
        labels.forEach((label,i) => ctx.fillText(label.text,(i%columns+.5)*cell,(Math.floor(i/columns)+.51)*cell));
      });
      const vertices = [], uvs = [], indices = [];
      labels.forEach(({x,y,z},index) => {
        const u = (index%columns)/columns, v = 1-Math.floor(index/columns)/rows;
        vertices.push(x-w,y,z-h, x+w,y,z-h, x+w,y+lift,z+h, x-w,y+lift,z+h);
        uvs.push(u,v,u+1/columns,v,u+1/columns,v-1/rows,u,v-1/rows);
        const n = index*4;
        indices.push(n,n+2,n+1,n,n+3,n+2);
      });
      const shape = new T.BufferGeometry();
      shape.setAttribute('position',new T.Float32BufferAttribute(vertices,3));
      shape.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));
      shape.setIndex(indices);
      const mesh = new T.Mesh(shape,new T.MeshBasicMaterial({map:atlas,transparent:true,depthWrite:false,side:T.DoubleSide}));
      mesh.renderOrder = 1;
      return mesh;
    }

    const ring = new T.Mesh(new T.RingGeometry(1.23,1.35,38),palette.goldLight);
    ring.rotation.x = -Math.PI/2;
    scene.add(ring);

    const colors = {
      cloth:new T.Color('#ceba96'), booth:new T.Color('#b39466'), full:new T.Color('#62584c'),
      pick:new T.Color('#f7d191'), muted:new T.Color('#585046'), seat:new T.Color('#b28d62'),
      free:new T.Color('#fff1d4'), taken:new T.Color('#554c43'), chosen:new T.Color('#edaf51')
    };
    let state;
    let focused = false;
    let section = true;
    let shown = false;
    let invalidated = false;
    let animation = null;

    function schedule() {
      if (!shown || invalidated) return;
      invalidated = true;
      requestAnimationFrame(render);
    }

    function render(now) {
      invalidated = false;
      if (!shown) return;
      if (animation) {
        const amount = Math.min((now-animation.start)/animation.duration,1);
        const eased = amount*amount*(3-2*amount);
        camera.position.lerpVectors(animation.from,animation.to,eased);
        controls.target.lerpVectors(animation.targetFrom,animation.targetTo,eased);
        controls.update();
        if (amount === 1) animation = null;
        else schedule();
      }
      const {x,y,z} = camera.position;
      walls[0].visible = !section || z > layout.front + 1;
      walls[1].visible = !section || x > -19;
      walls[2].visible = !section || x < 19;
      walls[3].visible = !section || z < 17;
      hanging.visible = !section;
      roof.visible = !section && y < 7.6 && Math.abs(x)<31 && z<24 && z>layout.front;
      renderer.render(scene,camera);
    }

    function sync(next) {
      state = next;
      const {unit,selected,stock,category} = next;
      function appearance(item, base) {
        if (item === unit) return colors.pick;
        if (category !== 'all' && category !== item.tier) return colors.muted;
        return stock.get(item.id).length ? base : colors.full;
      }
      tables.forEach((item,index) => discs.setColorAt(index,appearance(item,colors.cloth)));
      boxes.forEach((item,index) => boxMesh.setColorAt(index,appearance(item,colors.booth)));
      chairEntries.forEach(({item,number},index) => {
        let tint = item === unit ? colors.taken : colors.seat;
        if (item === unit && stock.get(item.id).includes(number)) tint = selected.has(number) ? colors.chosen : colors.free;
        if (category !== 'all' && category !== item.tier) tint = colors.muted;
        seatMesh.setColorAt(index,tint);
        backMesh.setColorAt(index,tint);
      });
      for (const mesh of [discs,boxMesh,seatMesh,backMesh]) mesh.instanceColor.needsUpdate = true;
      ring.position.set(unit.x,unit.y + .035,unit.z);
      if (labelUnit !== unit) {
        labelUnit = unit;
        if (chairLabels) {
          scene.remove(chairLabels);
          chairLabels.geometry.dispose();
          chairLabels.material.map.dispose();
          chairLabels.material.dispose();
        }
        chairLabels = makeLabels(Array.from({length:12},(_,i) => {
          const {x,z} = chairPosition(unit,i+1);
          return {text:i+1,x,y:unit.y+.57,z};
        }),.145,.12,28,'#f9f0dc',.04);
        scene.add(chairLabels);
      }
      chairLabels.visible = focused;
      schedule();
    }

    function resize() {
      if (!shown || !canvas.clientWidth || !canvas.clientHeight) return;
      camera.aspect = canvas.clientWidth/canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
      schedule();
    }
    new ResizeObserver(resize).observe(canvas);
    controls.addEventListener('change',schedule);
    controls.addEventListener('start',() => { animation = null; callbacks.tooltip(null); });
    canvas.addEventListener('webglcontextlost',event => {
      event.preventDefault();
      shown = false;
      callbacks.failure();
    });

    function fly(position,target,duration=550) {
      animation = null;
      if (callbacks.reducedMotion.matches) {
        camera.position.copy(position);
        controls.target.copy(target);
        controls.update();
      } else {
        animation = {start:performance.now(),duration,from:camera.position.clone(),to:position,targetFrom:controls.target.clone(),targetTo:target};
      }
      schedule();
    }

    function presets(name) {
      if (name === 'overview' || name === 'top') {
        focused = false;
        section = true;
        camera.fov = 41;
        camera.updateProjectionMatrix();
        if (chairLabels) chairLabels.visible = false;
        const narrow = canvas.clientWidth/canvas.clientHeight < 1.15;
        const position = name === 'top' ? [0,narrow ? 106 : 81,2] : [narrow ? 16 : 23,narrow ? 69 : 54,narrow ? 72 : 58];
        fly(new T.Vector3(...position),new T.Vector3(0,1,-1));
        return;
      }
      animation = null;
      const offset = camera.position.clone().sub(controls.target);
      if (name === 'left' || name === 'right') offset.applyAxisAngle(new T.Vector3(0,1,0),name === 'left' ? -.3 : .3);
      if (name === 'in' || name === 'out') {
        const distance = offset.length();
        offset.setLength(Math.min(controls.maxDistance,Math.max(controls.minDistance,distance*(name === 'in' ? .79 : 1.26))));
      }
      fly(offset.add(controls.target),controls.target.clone(),330);
    }

    function detail(item) {
      focused = true;
      section = true;
      camera.fov = 41;
      camera.updateProjectionMatrix();
      if (chairLabels) chairLabels.visible = true;
      fly(new T.Vector3(item.x+1.45,item.y+6.65,item.z+4.4),new T.Vector3(item.x,item.y+.18,item.z),490);
    }

    function pov(item,number) {
      focused = false;
      section = false;
      camera.fov = 60;
      camera.updateProjectionMatrix();
      if (chairLabels) chairLabels.visible = false;
      const {x,z} = number ? chairPosition(item,number) : {x:item.x,z:item.z+1.03};
      fly(new T.Vector3(x,item.y+1.22,z),new T.Vector3(0,2.12,-17.65),640);
    }

    const mouse = new T.Vector2();
    const ray = new T.Raycaster();
    const targets = [discs,boxMesh,seatMesh,backMesh];
    function pick(event) {
      if (!state || !shown) return null;
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX-bounds.left, y = event.clientY-bounds.top;
      mouse.set(x/bounds.width*2-1,-y/bounds.height*2+1);
      ray.setFromCamera(mouse,camera);
      for (const hit of ray.intersectObjects(targets,false)) {
        const entry = hit.object === discs ? {item:tables[hit.instanceId]}
          : (hit.object === boxMesh ? {item:boxes[hit.instanceId]} : chairEntries[hit.instanceId]);
        if (state.category === 'all' || state.category === entry.item.tier) return {...entry,x,y};
      }
      return null;
    }
    let down;
    canvas.addEventListener('pointerdown',event => { down = event.button === 0 ? [event.clientX,event.clientY] : null; });
    canvas.addEventListener('pointercancel',() => { down=null; });
    canvas.addEventListener('pointerup',event => {
      if (!down || Math.hypot(event.clientX-down[0],event.clientY-down[1]) > 6) { down=null; return; }
      down=null;
      const hit = pick(event);
      if (!hit) return;
      if (focused && hit.item === state.unit && hit.number) callbacks.chair(hit.number);
      else callbacks.unit(hit.item.id);
    });
    let lastHover = 0;
    canvas.addEventListener('pointermove',event => {
      if (event.pointerType === 'touch' || down || performance.now()-lastHover < 38) return;
      lastHover = performance.now();
      const hit = pick(event);
      canvas.style.cursor = hit ? 'pointer' : 'grab';
      callbacks.tooltip(hit?.item,hit?.x,hit?.y);
    });
    canvas.addEventListener('pointerleave',() => { down=null; callbacks.tooltip(null); });

    return {
      camera:presets, detail, pov, sync,
      visible(value) {
        shown = value;
        controls.enabled = value;
        if (value) resize();
      }
    };
  };
})();
