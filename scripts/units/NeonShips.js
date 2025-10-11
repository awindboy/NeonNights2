function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    tryDo(() => UnitTypes.elude.parts.each(p => p.color = Color.valueOf("f17afa")))
    tryDo(() => UnitTypes.elude.abilities.each(a => a.color = Color.valueOf("f17afa")))
    UnitTypes.elude.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("d17aff"))
        tryDo(() => w.bullet.hitColor = Color.valueOf("d17aff"))
        tryDo(() => w.bullet.trailColor = Color.valueOf("d17aff"))
    })

    UnitTypes.avert.weapons.each(w => {
        tryDo(() => w.bullet.backColor = Color.valueOf("d17aff"))
        tryDo(() => w.bullet.hitColor = Color.valueOf("d17aff"))
        tryDo(() => w.bullet.trailColor = Color.valueOf("d17aff"))
    })

    UnitTypes.obviate.weapons.each(w => {
        tryDo(() => w.bullet.intervalBullet.lightningColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.backColor = Color.valueOf("8743bf"))
        tryDo(() => w.bullet.frontColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.despawnEffect.waveColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.despawnEffect.sparkColor = Color.valueOf("814c9e"))
        tryDo(() => w.bullet.hitEffect.waveColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.hitEffect.sparkColor = Color.valueOf("814c9e"))
        tryDo(() => w.bullet.hitColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.lightningColor = Color.valueOf("f17afa"))
        tryDo(() => w.bullet.trailColor = Color.valueOf("8743bf"))
    })

    UnitTypes.quell.abilities.each(a => {
        tryDo(() => a.color = Color.valueOf("d17aff"))
        tryDo(() => a.particleColor = Color.valueOf("814c9e"))
    })
    UnitTypes.quell.weapons.each(w => {
        tryDo(() => w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf"))
        tryDo(() => w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf"))
    })

    UnitTypes.disrupt.abilities.each(a => {
        tryDo(() => a.color = Color.valueOf("d17aff"))
        tryDo(() => a.particleColor = Color.valueOf("814c9e"))
    })
    UnitTypes.disrupt.weapons.each(w => {
        tryDo(() => w.bullet.spawnUnit.trailColor = Color.valueOf("8743bf"))
        tryDo(() => w.bullet.spawnUnit.engineColor = Color.valueOf("8743bf"))
    })
})