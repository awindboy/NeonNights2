function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    let mainAccent = Color.valueOf("6cf5d7")
    UnitTypes.nova.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
    })

    UnitTypes.pulsar.weapons.each(w => {
        tryDo(() => w.bullet.lightningColor = mainAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
    })

    let extraAccent = Color.valueOf("6cf5d766")
    UnitTypes.quasar.weapons.each(w => {
        if(w.bullet instanceof LaserBulletType)
            tryDo(() => w.bullet.colors = [extraAccent, mainAccent, Color.white])
    })

    let darkerAccent = Color.valueOf("6cf5d733"), brigtherAccent = Color.valueOf("6cf5d7ff")
    UnitTypes.vela.weapons.each(w => {
        if(w.bullet instanceof ContinuousLaserBulletType)
            tryDo(() => w.bullet.colors = [darkerAccent, brigtherAccent, mainAccent, Color.white])
    })

    UnitTypes.corvus.weapons.each(w => {
        if(w.bullet instanceof LaserBulletType)
            tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.colors = [extraAccent, mainAccent, Color.white])

        tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.lightColor = mainAccent)
        tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.lightningColor = mainAccent)
    })

    UnitTypes.poly.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.mega.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
    })

    UnitTypes.quad.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
    })

    UnitTypes.retusa.weapons.each(w => {
        if(w instanceof RepairBeamWeapon) return
        tryDo(() => w.bullet.backColor = mainAccent)
    })

    UnitTypes.cyerce.weapons.each(w => {
        if(w.bullet instanceof FlakBulletType){
            tryDo(() => w.bullet.backColor = mainAccent)
            tryDo(() => w.bullet.lightColor = mainAccent)
            tryDo(() => w.bullet.hitEffect.waveColor = mainAccent)
            tryDo(() => w.bullet.hitEffect.sparkColor = mainAccent)
            tryDo(() => w.bullet.trailColor = mainAccent)
            tryDo(() => w.bullet.fragBullet.backColor = mainAccent)
            tryDo(() => w.bullet.fragBullet.lightColor = mainAccent)
            tryDo(() => w.bullet.fragBullet.trailColor = mainAccent)
        }
    })

    UnitTypes.navanax.weapons.each(w => {
        if(w.bullet instanceof ContinuousLaserBulletType)
            tryDo(() => w.bullet.colors = [darkerAccent, brigtherAccent, mainAccent, Color.white])
        else tryDo(() => w.bullet.backColor = mainAccent)
    })
})