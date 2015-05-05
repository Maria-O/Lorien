var liquidChart = function () {
    loadLiquidFillGauge("fillgauge1", 55);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#2a3c57";
    config1.textColor = "#2a3c57";
    config1.waveTextColor = "#74A6F0";
    config1.waveColor = "#74A6F0";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
}();