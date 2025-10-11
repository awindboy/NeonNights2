function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    UnitTypes.nova.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.pulsar.weapons.each(w => {
        tryDo(() => w.bullet.lightningColor = Color.valueOf("6cf5d7"))
        tryDo(() => w.bullet.hitColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.quasar.weapons.each(w => {
        if(w.bullet instanceof LaserBulletType)
            tryDo(() => w.bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")])
    })

    UnitTypes.vela.weapons.each(w => {
        if(w.bullet instanceof ContinuousLaserBulletType)
            tryDo(() => w.bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")])
    })

    UnitTypes.corvus.weapons.each(w => {
        if(w.bullet instanceof LaserBulletType)
            tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.colors = [Color.valueOf("6cf5d766"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")])

        tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.lightColor = Color.valueOf("6cf5d7"))
        tryDo(() => UnitTypes.corvus.weapons.get(0).bullet.lightningColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.poly.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
        tryDo(() => w.bullet.trailColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.mega.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.quad.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.retusa.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
    })

    UnitTypes.cyerce.weapons.each(w => {
        if(w.bullet instanceof FlakBulletType){
            tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.lightColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.hitEffect.waveColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.hitEffect.sparkColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.trailColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.fragBullet.backColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.fragBullet.lightColor = Color.valueOf("6cf5d7"))
            tryDo(() => w.bullet.fragBullet.trailColor = Color.valueOf("6cf5d7"))
        }
    })

    UnitTypes.navanax.weapons.each(w => {
        if(w.bullet instanceof ContinuousLaserBulletType)
            tryDo(() => w.bullet.colors = [Color.valueOf("6cf5d733"), Color.valueOf("6cf5d77f"), Color.valueOf("6cf5d7"), Color.valueOf("ffffff")])
        else tryDo(() => w.bullet.backColor = Color.valueOf("6cf5d7"))
    })
})