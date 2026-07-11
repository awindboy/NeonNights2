let originalEngineColor = UnitTypes.alpha.engineColor, originalEngineColorInner = UnitTypes.alpha.engineColorInner

let engineColor = {
    yellowAccent: Color.valueOf("f99d49"),
    yellowInnerAccent: Color.valueOf("fbd172"),
    
    orangeAccent: Color.valueOf("f17e4c"),
    orangeInnerAccent: Color.valueOf("ffc2a7"),
    
    tealAccent: Color.valueOf("59cbba"),
    tealInnerAccent: Color.valueOf("acede8")
} 

function colorEngines(units, isEnabled, engineColor, engineColorInner) {
    units.forEach(unit => {
        if (unit != null && isEnabled === true) {
            unit.engineColor = engineColor
            unit.engineColorInner = engineColorInner
        } else {
            unit.engineColor = originalEngineColor
            unit.engineColorInner = originalEngineColorInner
        }
    });
}

function coloredEngines(isEnabled) {
    const serpuloCoreUnits = [
        UnitTypes.alpha,
        UnitTypes.beta,
        UnitTypes.gamma
    ];

    const serpuloGreenUnits = [
        UnitTypes.mono,
        UnitTypes.poly,
        UnitTypes.mega,
        UnitTypes.quad,
        UnitTypes.oct,
        UnitTypes.nova,
        UnitTypes.pulsar,
        UnitTypes.quasar,
        UnitTypes.vela
    ];

    const serpuloOrangeUnits = [
        UnitTypes.flare,   
        UnitTypes.horizon,
        UnitTypes.zenith,
        UnitTypes.antumbra,
        UnitTypes.eclipse
    ]

    colorEngines(serpuloCoreUnits, isEnabled, engineColor.yellowAccent, engineColor.yellowInnerAccent);
    colorEngines(serpuloGreenUnits, isEnabled, engineColor.tealAccent, engineColor.tealInnerAccent);
    colorEngines(serpuloOrangeUnits, isEnabled, engineColor.orangeAccent, engineColor.orangeInnerAccent);
}

Events.on(ClientLoadEvent, () => {
    Vars.ui.settings.addCategory("@setting.nn-settings.name", Icon.settings, table => {
        table.check("@setting.engine-colors-serpulo.name", Core.settings.get("@setting.engine-colors-serpulo.name", false), value => {
            Core.settings.put("@setting.engine-colors-serpulo.name", value);
            coloredEngines(value);
        }).left().padBottom(4);
        table.row();        
    });
    const savedSetting = Core.settings.get("@setting.engine-colors-serpulo.name", false);
    coloredEngines(savedSetting);
});