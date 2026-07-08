function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    let mainAccent = Color.valueOf("ff6953")
    let secondaryAccent = Color.valueOf("ffb2a8")
    UnitTypes.flare.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.frontColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.horizon.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.frontColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.zenith.weapons.each(w => {
        tryDo(() => w.bullet.spawnUnit.engineColor = mainAccent)
        tryDo(() => w.bullet.frontColor = secondaryAccent)
        tryDo(() => w.bullet.spawnUnit.trailColor = mainAccent)
    })

    UnitTypes.antumbra.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.frontColor = secondaryAccent)
        tryDo(() => w.bullet.lightColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.eclipse.weapons.each(w => {
        if(w.bullet instanceof LaserBulletType)
            tryDo(() => UnitTypes.eclipse.weapons.get(0).bullet.colors = [mainAccent, secondaryAccent, Color.white])

        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.frontColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
        tryDo(() => w.bullet.lightColor = mainAccent)
    })
})