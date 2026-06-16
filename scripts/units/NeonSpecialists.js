function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    let mainAccent = Color.valueOf("f17afa")
    UnitTypes.spiroct.weapons.each(w => {
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.color = mainAccent)
    })

    let secondaryAccent = Color.valueOf("7343bf")
    UnitTypes.arkyid.weapons.each(w => {
        if(w.bullet instanceof SapBulletType){
            tryDo(() => w.bullet.hitColor = mainAccent)
            tryDo(() => w.bullet.color = mainAccent)
        }else{
            tryDo(() => w.bullet.frontColor = mainAccent)
            tryDo(() => w.bullet.backColor = secondaryAccent)
            tryDo(() => w.bullet.lightningColor = mainAccent)
            tryDo(() => w.bullet.trailColor = secondaryAccent)
        }
    })

    let darkerAccent = Color.valueOf("814c9e")
    UnitTypes.toxopid.weapons.each(w => {
        if(w.bullet instanceof ShrapnelBulletType){
            tryDo(() => w.bullet.fromColor = mainAccent)
            tryDo(() => w.bullet.toColor = secondaryAccent)
        }else{
            tryDo(() => w.bullet.frontColor = mainAccent)
            tryDo(() => w.bullet.lightningColor = mainAccent)
            tryDo(() => w.bullet.lightColor = darkerAccent)
            tryDo(() => w.bullet.trailColor = secondaryAccent)
            tryDo(() => w.bullet.fragBullet.backColor = secondaryAccent)
            tryDo(() => w.bullet.fragBullet.lightningColor = mainAccent)
            tryDo(() => w.bullet.fragBullet.trailColor = secondaryAccent)
            tryDo(() => w.bullet.fragBullet.lightColor = darkerAccent)
        }
    })
})