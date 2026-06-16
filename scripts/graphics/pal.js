function tryDo(func){
    try{
        func()
    }catch(e){
        Log.warn(e)
    }
}

Events.on(ClientLoadEvent, b  => {
    tryDo(() => Pal.heal = Color.valueOf("6cf5d7"))
    tryDo(() => Pal.sap = Color.valueOf("814c9e"))
    tryDo(() => Pal.sapBullet = Color.valueOf("f17afa"))
    tryDo(() => Pal.sapBulletBack = Color.valueOf("7343bf"))
    tryDo(() => Pal.suppress = Color.valueOf("d17aff"))
    tryDo(() => Pal.techBlue = Color.valueOf("7485e8"))

    // also change the liquid colors a bit
    tryDo(() => Liquids.slag.lightColor = Color.valueOf("ff4416b9"))
    tryDo(() => Liquids.cryofluid.lightColor = Color.valueOf("33f5ff61"))
});