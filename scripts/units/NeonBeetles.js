Events.on(ClientLoadEvent, b  => {
    try{
        UnitTypes.merui.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("7485e8");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.hitColor = Color.valueOf("7485e8");
            w.bullet.trailColor = Color.valueOf("7485e8");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.cleroi.weapons.each(w => {
            w.bullet.hitColor = Color.valueOf("7485e8");
            w.bullet.trailColor = Color.valueOf("7485e8");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.anthicus.weapons.each(w => {
            try{
                w.bullet.spawnUnit.engineColor = Color.valueOf("7485e8");
                w.bullet.spawnUnit.trailColor = Color.valueOf("7485e8");
            }catch(e){
                Log.warn(e);
            }
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.tecta.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("7485e8");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.lightColor = Color.valueOf("7485e8");
            w.bullet.trailColor = Color.valueOf("7485e8");
        })
    }catch(e){
        Log.error(e);
    }
    try{
        UnitTypes.collaris.weapons.each(w => {
            try{
                w.bullet.backColor = Color.valueOf("7485e8");
            }catch(e){
                Log.warn(e);
            }

            w.bullet.hitColor = Color.valueOf("7485e8");
            w.bullet.trailColor = Color.valueOf("7485e8");
            w.bullet.lightColor = Color.valueOf("7485e8");
        })
    }catch(e){
        Log.error(e);
    }
});