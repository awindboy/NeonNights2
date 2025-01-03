Events.on(ClientLoadEvent, b  => {
    try{
        UnitTypes.nova.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("6cf5d7")
            }catch(e){
                Log.warn(e);
            }
        });
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.pulsar.weapons.each(w => {
            w.bullet.lightningColor = Color.valueOf("6cf5d7");
            w.bullet.hitColor = Color.valueOf("6cf5d7");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.quasar.weapons.each(w => {
            if(w.bullet instanceof LaserBulletType)
                w.bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.vela.weapons.each(w => {
            if(w.bullet instanceof ContinuousLaserBulletType)
                w.bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.corvus.weapons.each(w =>{
            if(w.bullet instanceof LaserBulletType)
                UnitTypes.corvus.weapons.get(0).bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
            UnitTypes.corvus.weapons.get(0).bullet.lightColor = Color.valueOf("6cf5d7");
            UnitTypes.corvus.weapons.get(0).bullet.lightningColor = Color.valueOf("6cf5d7");
        })
    }catch(e){
        Log.error(e);
    }

    try{
        UnitTypes.poly.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("6cf5d7");
                w.bullet.trailColor = Color.valueOf("6cf5d7");
            }catch(e){
                Log.warn(e);
            }
        });
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.mega.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("6cf5d7");
            }catch(e){
                Log.warn(e);
            }
        });
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.quad.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("6cf5d7");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }

    try{
        UnitTypes.retusa.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("6cf5d7");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.cyerce.weapons.each(w => {
            if(w.bullet instanceof FlakBulletType){
                w.bullet.backColor = Color.valueOf("6cf5d7");
                w.bullet.lightColor = Color.valueOf("6cf5d7");
                w.bullet.hitEffect.waveColor = Color.valueOf("6cf5d7");
                w.bullet.hitEffect.sparkColor = Color.valueOf("6cf5d7");
                w.bullet.trailColor = Color.valueOf("6cf5d7");
                if(w.bullet.fragBullet != null){
                    w.bullet.fragBullet.backColor = Color.valueOf("6cf5d7");
                    w.bullet.fragBullet.lightColor = Color.valueOf("6cf5d7");
                    w.bullet.fragBullet.trailColor = Color.valueOf("6cf5d7");
                }
            }
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.navanax.weapons.each(w => {
            if(w.bullet instanceof ContinuousLaserBulletType){
                w.bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")];
            }else try{
                w.bullet.backColor = Color.valueOf("6cf5d7");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }
});