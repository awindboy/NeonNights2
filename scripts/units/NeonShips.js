Events.on(ClientLoadEvent, b  => {
    try{
        UnitTypes.elude.parts.each(p => p.color = Color.valueOf("f17afa"));
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.elude.abilities.each(a => a.color = Color.valueOf("f17afa"));
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.elude.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("d17aff");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.hitColor = Color.valueOf("d17aff");
            w.bullet.trailColor = Color.valueOf("d17aff");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.avert.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("d17aff");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.hitColor = Color.valueOf("d17aff");
            w.bullet.trailColor = Color.valueOf("d17aff");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.obviate.weapons.each(w => {
            try{
                w.bullet.intervalBullet.lightningColor = Color.valueOf("f17afa");
                w.bullet.backColor = Color.valueOf("8743bf");
                w.bullet.frontColor = Color.valueOf("f17afa");
                w.bullet.despawnEffect.waveColor = Color.valueOf("f17afa");
                w.bullet.despawnEffect.sparkColor = Color.valueOf("814c9e");
                w.bullet.hitEffect.waveColor = Color.valueOf("f17afa");
                w.bullet.hitEffect.sparkColor = Color.valueOf("814c9e");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.hitColor = Color.valueOf("f17afa");
            w.bullet.lightningColor = Color.valueOf("f17afa");
            w.bullet.trailColor = Color.valueOf("8743bf");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.quell.abilities.each(a => {
            a.color = Color.valueOf("d17aff");
            a.particleColor = Color.valueOf("814c9e");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.quell.weapons.each(w => {
            try{
                w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf");
                w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.disrupt.abilities.each(a => {
            a.color = Color.valueOf("d17aff");
            a.particleColor = Color.valueOf("814c9e");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.disrupt.weapons.each(w => {
            try{
                w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf");
                w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }
});