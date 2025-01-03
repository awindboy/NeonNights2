Events.on(ClientLoadEvent, b  => {
    try{
        UnitTypes.spiroct.weapons.each(w => {
            w.bullet.hitColor = Color.valueOf("f17afa")
            w.bullet.color = Color.valueOf("f17afa");
        });
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.arkyid.weapons.each(w => {
            if(w.bullet instanceof SapBulletType){
                w.bullet.hitColor = Color.valueOf("f17afa");
                w.bullet.color = Color.valueOf("f17afa");
            }else{
                try{
                    w.bullet.frontColor = Color.valueOf("f17afa");
                    w.bullet.backColor = Color.valueOf("7343bf");
                }catch(e){
                    Log.warn(e);
                }

                w.bullet.lightningColor = Color.valueOf("f17afa");
                w.bullet.trailColor = Color.valueOf("7343bf");
            }
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.toxopid.weapons.each(w => {
            if(w.bullet instanceof ShrapnelBulletType){
                w.bullet.fromColor = Color.valueOf("f17afa");
                w.bullet.toColor = Color.valueOf("7343bf");
            }else{
                try{
                    w.bullet.frontColor = Color.valueOf("f17afa");
                }catch(e){
                    Log.warn(e);
                }

                w.bullet.lightningColor = Color.valueOf("f17afa");
                w.bullet.lightColor = Color.valueOf("814c9e");
                w.bullet.trailColor = Color.valueOf("7343bf");
                if(w.bullet.fragBullet != null){
                    try{
                        w.bullet.fragBullet.backColor = Color.valueOf("7343bf");
                    }catch(e){
                        Log.warn(e);
                    }

                    w.bullet.fragBullet.lightningColor = Color.valueOf("f17afa");
                    w.bullet.fragBullet.trailColor = Color.valueOf("7343bf");
                    w.bullet.fragBullet.lightColor = Color.valueOf("814c9e");
                }
            }
        })
    }catch(e){
        Log.error(e);
    }
});