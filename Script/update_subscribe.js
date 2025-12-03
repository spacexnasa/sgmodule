try {
    $app.openURL('shadowrocket://update-subs');   
    console.log('🚀 Triggered subscription update via URL scheme');
   
    $notification.post(
        "订阅更新已触发",
        "Shadowrocket 正在后台更新所有订阅",
        "下次执行: 15分钟后"
    );
    
    console.log('✅ Subscription update initiated successfully');
    
} catch (error) {
    console.log('❌ Failed to trigger subscription trigger subscription update: ' + error);
    
    $notification.post(
        "订阅更新失败",
        "请检查网络连接或配置",
        error.message || "未知错误"
    );
}
$done();
