--[[
    Created by ✪ Misiek™#9040
    discord: https://discord.gg/HtPSCZrxnC
]]

RegisterNUICallback("handover", function(data, cb)
    TriggerEvent("data:handover", data)
    cb("ok")
end)

RegisterNUICallback("continue", function(data, cb)
    ShutdownLoadingScreen()
	ShutdownLoadingScreenNui()

    DoScreenFadeIn(5000)
    cb("ok")
end)

SendLoadingScreenMessage(json.encode({
    handover = true
}))

--[[
    Created by ✪ Misiek™#9040
    discord: https://discord.gg/HtPSCZrxnC
]]