document.addEventListener("DOMContentLoaded", () => {
    const timezones = [
        { value: "Pacific/Midway", text: "(GMT-11:00) Midway Island, Samoa" },
        { value: "America/Adak", text: "(GMT-10:00) Hawaii-Aleutian" },
        { value: "Etc/GMT+10", text: "(GMT-10:00) Hawaii" },
        { value: "Pacific/Marquesas", text: "(GMT-09:30) Marquesas Islands" },
        { value: "Pacific/Gambier", text: "(GMT-09:00) Gambier Islands" },
        { value: "America/Anchorage", text: "(GMT-09:00) Alaska" },
        {
            value: "America/Ensenada",
            text: "(GMT-08:00) Tijuana, Baja California",
        },
        { value: "Etc/GMT+8", text: "(GMT-08:00) Pitcairn Islands" },
        {
            value: "America/Los_Angeles",
            text: "(GMT-08:00) Pacific Time (US & Canada)",
        },
        {
            value: "America/Denver",
            text: "(GMT-07:00) Mountain Time (US & Canada)",
        },
        {
            value: "America/Chihuahua",
            text: "(GMT-07:00) Chihuahua, La Paz, Mazatlan",
        },
        { value: "America/Dawson_Creek", text: "(GMT-07:00) Arizona" },
        {
            value: "America/Chicago",
            text: "(GMT-06:00) Central Time (US & Canada)",
        },
        {
            value: "America/Belize",
            text: "(GMT-06:00) Saskatchewan, Central America",
        },
        {
            value: "America/Mexico_City",
            text: "(GMT-06:00) Guadalajara, Mexico City, Monterrey",
        },
        { value: "Canada/Saskatchewan", text: "(GMT-06:00) Saskatchewan" },
        {
            value: "America/Bogota",
            text: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
        },
        {
            value: "America/New_York",
            text: "(GMT-05:00) Eastern Time (US & Canada)",
        },
        {
            value: "America/Indiana/Indianapolis",
            text: "(GMT-05:00) Indiana (East)",
        },
        { value: "America/Caracas", text: "(GMT-04:30) Caracas" },
        {
            value: "America/Halifax",
            text: "(GMT-04:00) Atlantic Time (Canada)",
        },
        { value: "America/Manaus", text: "(GMT-04:00) Manaus" },
        { value: "America/Santiago", text: "(GMT-04:00) Santiago" },
        { value: "America/La_Paz", text: "(GMT-04:00) La Paz" },
        { value: "America/St_Johns", text: "(GMT-03:30) Newfoundland" },
        {
            value: "America/Argentina/Buenos_Aires",
            text: "(GMT-03:00) Georgetown",
        },
        { value: "America/Sao_Paulo", text: "(GMT-03:00) Brasilia" },
        { value: "America/Godthab", text: "(GMT-03:00) Greenland" },
        { value: "America/Montevideo", text: "(GMT-03:00) Montevideo" },
        { value: "Atlantic/South_Georgia", text: "(GMT-02:00) Mid-Atlantic" },
        { value: "Atlantic/Azores", text: "(GMT-01:00) Azores" },
        { value: "Atlantic/Cape_Verde", text: "(GMT-01:00) Cape Verde Is." },
        {
            value: "Europe/Dublin",
            text: "(GMT+00:00) Dublin, Edinburgh, Lisbon, London",
        },
        {
            value: "Europe/Belgrade",
            text: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        },
        {
            value: "Europe/Sarajevo",
            text: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        },
        {
            value: "Europe/Brussels",
            text: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris",
        },
        { value: "Africa/Algiers", text: "(GMT+01:00) West Central Africa" },
        { value: "Africa/Windhoek", text: "(GMT+01:00) Windhoek" },
        { value: "Asia/Beirut", text: "(GMT+02:00) Beirut" },
        { value: "Africa/Cairo", text: "(GMT+02:00) Cairo" },
        { value: "Asia/Gaza", text: "(GMT+02:00) Gaza" },
        { value: "Africa/Blantyre", text: "(GMT+02:00) Harare, Pretoria" },
        { value: "Asia/Jerusalem", text: "(GMT+02:00) Jerusalem" },
        { value: "Europe/Minsk", text: "(GMT+02:00) Minsk" },
        { value: "Asia/Damascus", text: "(GMT+02:00) Syria" },
        {
            value: "Europe/Moscow",
            text: "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
        },
        { value: "Africa/Addis_Ababa", text: "(GMT+03:00) Nairobi" },
        { value: "Asia/Tehran", text: "(GMT+03:30) Tehran" },
        { value: "Asia/Dubai", text: "(GMT+04:00) Abu Dhabi, Muscat" },
        { value: "Asia/Yerevan", text: "(GMT+04:00) Yerevan" },
        { value: "Asia/Kabul", text: "(GMT+04:30) Kabul" },
        { value: "Asia/Yekaterinburg", text: "(GMT+05:00) Yekaterinburg" },
        {
            value: "Asia/Karachi",
            text: "(GMT+05:00) Islamabad, Karachi, Tashkent",
        },
        {
            value: "Asia/Kolkata",
            text: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        },
        { value: "Asia/Kathmandu", text: "(GMT+05:45) Kathmandu" },
        { value: "Asia/Dhaka", text: "(GMT+06:00) Astana, Dhaka" },
        { value: "Asia/Novosibirsk", text: "(GMT+06:00) Almaty, Novosibirsk" },
        { value: "Asia/Rangoon", text: "(GMT+06:30) Yangon (Rangoon)" },
        { value: "Asia/Bangkok", text: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
        { value: "Asia/Krasnoyarsk", text: "(GMT+07:00) Krasnoyarsk" },
        {
            value: "Asia/Shanghai",
            text: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        },
        { value: "Asia/Irkutsk", text: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
        { value: "Australia/Perth", text: "(GMT+08:00) Perth" },
        { value: "Australia/Eucla", text: "(GMT+08:45) Eucla" },
        { value: "Asia/Tokyo", text: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
        { value: "Asia/Seoul", text: "(GMT+09:00) Seoul" },
        { value: "Asia/Yakutsk", text: "(GMT+09:00) Yakutsk" },
        { value: "Australia/Adelaide", text: "(GMT+09:30) Adelaide" },
        { value: "Australia/Darwin", text: "(GMT+09:30) Darwin" },
        { value: "Australia/Brisbane", text: "(GMT+10:00) Brisbane" },
        { value: "Australia/Hobart", text: "(GMT+10:00) Hobart" },
    ];
    const timezoneSelect = document.getElementById("timezone");

    timezones.forEach(timezone => {
        const option = document.createElement("option");
        option.value = timezone.value;
        option.textContent = timezone.text;
        timezoneSelect.appendChild(option);
    });
});
