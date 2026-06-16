function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b => {
    let mainAccent = Color.valueOf("7485e8")
    UnitTypes.merui.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.cleroi.weapons.each(w => {
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.anthicus.weapons.each(w => {
        tryDo(() => w.bullet.spawnUnit.engineColor = mainAccent)
        tryDo(() => w.bullet.spawnUnit.trailColor = mainAccent)
    })

    UnitTypes.tecta.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.lightColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
    })

    UnitTypes.collaris.weapons.each(w => {
        tryDo(() => w.bullet.backColor = mainAccent)
        tryDo(() => w.bullet.hitColor = mainAccent)
        tryDo(() => w.bullet.trailColor = mainAccent)
        tryDo(() => w.bullet.lightColor = mainAccent)
    })
})