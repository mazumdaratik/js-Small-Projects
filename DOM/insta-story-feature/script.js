const images = [
    {dp: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/462605598_3872073476402813_4616203220863964676_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHYv71_xEcZK6x7GLQ--YuEhB-V0oSAc-WEH5XShIBz5WbNcuY3j2PUeDVVBCWpJiUrk2KHK7WCzS-ZFJHNHK8C&_nc_ohc=YcPO5lK7NZQQ7kNvgE43cUb&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=AlTphGH5AAo65h-4sAizuW2&oh=00_AYBGg1sVMhCQmsHOG6Jb-eTlPrbpqr8EoMGGuN4bvmcEuA&oe=67683C68", story: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/384780033_3603457063264457_4866358875562279828_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFTTA7J6sxKVcy9P660G71Rsw2Ui9KDjwezDZSL0oOPB6Zwy2s2gW9Hiiq89-AZMFPNRzFeCpV4TAWlFlWcTt_r&_nc_ohc=VcOMpYaPJcIQ7kNvgHSK0sx&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=ASR_rFHF-72xyImeUlcjszh&oh=00_AYCxahCEBL8Dh917iiWSL7BGEtjhTH4P6N83Y9OVwhErWw&oe=67681CF1"},
    {dp: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/384780033_3603457063264457_4866358875562279828_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFTTA7J6sxKVcy9P660G71Rsw2Ui9KDjwezDZSL0oOPB6Zwy2s2gW9Hiiq89-AZMFPNRzFeCpV4TAWlFlWcTt_r&_nc_ohc=VcOMpYaPJcIQ7kNvgHSK0sx&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=ASR_rFHF-72xyImeUlcjszh&oh=00_AYCxahCEBL8Dh917iiWSL7BGEtjhTH4P6N83Y9OVwhErWw&oe=67681CF1", story: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/454239234_3810133922596769_1221632817946033545_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF0ersa5wtOUT6hDc4uNt0zn9ft1cc9sQKf1-3Vxz2xAoSXKqVa2vM4MTFlsZAhtsDF5zD_oPOtS65YabiRYfQ3&_nc_ohc=7r-OvxrYbuIQ7kNvgF6AnUf&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=A-AvgX-X1zIh4nRi1jDo3WK&oh=00_AYCG8prjjngkkHof7LSJnCWuBMWJczLcCEGnSca4X8hfGw&oe=676828FF"},
    {dp: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/357510734_3536967103246787_6629253552792749758_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF6ZvYbVC5V6dWAT_WO7OUQCBnnPTzps1cIGec9POmzV4jfpE5yy-U6YSy1cXMfmBCWV2DYEACm1PKW1zQ0p46P&_nc_ohc=iWdXpd4zxhAQ7kNvgG11hLZ&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=A-Vx6Vuxn18JTu77FO_BAxA&oh=00_AYC9sDqFRDCJLOIiexoEIJ0lW3O5UrdQiiTTTDLcPGwUjg&oe=67682242", story: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/356349969_3529602600649904_9103256060484451096_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG5d7WZ43DAuCznbuvz6E2FoKwtVJkLpLmgrC1UmQukubbFqAp-YhhYXzxyMKfNDo6jiYb7BDJ9UppHM9LMl4IP&_nc_ohc=4iVWQaQ-lgAQ7kNvgE1w4C3&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=ABtp9cpt_dmV-fCSOj3ixFK&oh=00_AYCsIZf5e-mYECMvgMyKPp4_E5O6nJjtBq-6H67awxzspw&oe=67682E40"},
    {dp: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/348847577_264370972661557_6942624228895092849_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH1pKcba6xmbHEA3gNa-6rRzyj-NtYMOrfPKP421gw6t_EarNcyhSfDuwZ_SxaxsuMh2H9Hy7_5_VTCkC4YThly&_nc_ohc=tMziP6Tg1F8Q7kNvgEOMvoN&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=ACUpLTHQv5kYnsFzObFzF9c&oh=00_AYC7GVNPnKRUOA77arcpaOdwcDgaG7kIRjM12dk9yW2nJw&oe=67684FA7", story: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/348847577_264370972661557_6942624228895092849_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH1pKcba6xmbHEA3gNa-6rRzyj-NtYMOrfPKP421gw6t_EarNcyhSfDuwZ_SxaxsuMh2H9Hy7_5_VTCkC4YThly&_nc_ohc=tMziP6Tg1F8Q7kNvgEOMvoN&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=ACUpLTHQv5kYnsFzObFzF9c&oh=00_AYC7GVNPnKRUOA77arcpaOdwcDgaG7kIRjM12dk9yW2nJw&oe=67684FA7"}
]

var clutter = ""

images.forEach(function(elem, idx){
    clutter += `<div class="story">
            <img id ="${idx}" src="${elem.dp}" alt="">
        </div>`
})

document.querySelector("#storiyan").innerHTML = clutter
document.querySelector("#storiyan").addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${images[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});