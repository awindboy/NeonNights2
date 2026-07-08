function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    let mainAccent = Color.valueOf("f17afa"), secondaryAccent = Color.valueOf("d17aff")
    tryDo(() => UnitTypes.elude.parts.each(p => p.color = mainAccent))
    tryDo(() => UnitTypes.elude.abilities.each(a => a.color = mainAccent))

    let engineAccent = Color.valueOf("c155ff"), innerAccent = Color.valueOf("eea4ff")
    UnitTypes.elude.engineColor = engineAccent
    UnitTypes.elude.engineColorInner = innerAccent
    UnitTypes.elude.weapons.each(w => {
        tryDo(() => w.bullet.backColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = secondaryAccent)
        tryDo(() => w.bullet.trailColor = secondaryAccent)
    })

    UnitTypes.avert.engineColor = engineAccent
    UnitTypes.avert.engineColorInner = innerAccent
    UnitTypes.avert.weapons.each(w => {
        tryDo(() => w.bullet.backColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = secondaryAccent)
        tryDo(() => w.bullet.trailColor = secondaryAccent)
    })

    UnitTypes.obviate.engineColor = engineAccent
    UnitTypes.obviate.engineColorInner = innerAccent

    let sparkAccent = Color.valueOf("814c9e"), specialAccent = Color.valueOf("8743bf")
    UnitTypes.obviate.weapons.each(w => {
        tryDo(() => w.bullet.intervalBullet.lightningColor = mainAccent)
        tryDo(() => w.bullet.backColor = specialAccent)
        tryDo(() => w.bullet.frontColor = mainAccent)
        tryDo(() => w.bullet.despawnEffect.waveColor = sparkAccent)
        tryDo(() => w.bullet.despawnEffect.sparkColor = secondaryAccent)
        tryDo(() => w.bullet.hitEffect.waveColor = sparkAccent)
        tryDo(() => w.bullet.hitEffect.sparkColor = secondaryAccent)
        tryDo(() => w.bullet.hitColor = sparkAccent)
        tryDo(() => w.bullet.lightningColor = mainAccent)
        tryDo(() => w.bullet.trailColor = specialAccent)
    })

    UnitTypes.quell.engineColor = engineAccent
    UnitTypes.quell.engineColorInner = innerAccent

    let missileAccent = Color.valueOf("b587bf")
    UnitTypes.quell.abilities.each(a => {
        tryDo(() => a.color = secondaryAccent)
        tryDo(() => a.particleColor = sparkAccent)
    })
    UnitTypes.quell.weapons.each(w => {
        tryDo(() => w.bullet.trailColor = specialAccent)
        tryDo(() => w.bullet.fragBullet.spawnUnit.trailColor = specialAccent)
        tryDo(() => w.bullet.fragBullet.spawnUnit.engineColor = missileAccent)
    })

    UnitTypes.disrupt.engineColor = engineAccent
    UnitTypes.disrupt.engineColorInner = innerAccent
    UnitTypes.disrupt.abilities.each(a => {
        tryDo(() => a.color = secondaryAccent)
        tryDo(() => a.particleColor = sparkAccent)
    })
    UnitTypes.disrupt.weapons.each(w => {
        tryDo(() => w.bullet.spawnUnit.trailColor = specialAccent)
        tryDo(() => w.bullet.spawnUnit.engineColor = missileAccent)
    })
})