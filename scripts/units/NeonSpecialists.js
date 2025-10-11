function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    UnitTypes.spiroct.weapons.each(w => {
        tryDo(() => w.bullet.hitColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.color = Color.valueOf("f17afa"))
    })

    UnitTypes.arkyid.weapons.each(w => {
        if(w.bullet instanceof SapBulletType){
            tryDo(() => w.bullet.hitColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.color = Color.valueOf("f17afa"))
        }else{
            tryDo(() => w.bullet.frontColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.backColor = Color.valueOf("7343bf"))
            tryDo(() => w.bullet.lightningColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.trailColor = Color.valueOf("7343bf"))
        }
    })

    UnitTypes.toxopid.weapons.each(w => {
        if(w.bullet instanceof ShrapnelBulletType){
            tryDo(() => w.bullet.fromColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.toColor = Color.valueOf("7343bf"))
        }else{
            tryDo(() => w.bullet.frontColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.lightningColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.lightColor = Color.valueOf("814c9e"))
            tryDo(() => w.bullet.trailColor = Color.valueOf("7343bf"))
            tryDo(() => w.bullet.fragBullet.backColor = Color.valueOf("7343bf"))
            tryDo(() => w.bullet.fragBullet.lightningColor = Color.valueOf("f17afa"))
            tryDo(() => w.bullet.fragBullet.trailColor = Color.valueOf("7343bf"))
            tryDo(() => w.bullet.fragBullet.lightColor = Color.valueOf("814c9e"))
        }
    })
})