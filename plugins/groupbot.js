let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗩𝗬𝗥𝗔𝗡𝗫 𝗕𝗢𝗧*\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: '💌 › Group 𝗩𝗬𝗥𝗔𝗡𝗫', description: "Group Utama 𝗩𝗬𝗥𝗔𝗡𝗫", rowId:".gcbot"},
        {title: '📧 › Group Full Bot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '🎐 › Owner', description: "Creator 𝗭𝗬𝗞𝗨𝗔𝗡 >ω<", rowId:".owner"},
        {title: '🧿 › Info Fangz BOT', description: "Info 𝗩𝗬𝗥𝗔𝗡𝗫 >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk 𝗭𝗬𝗞𝗨𝗔𝗡 ≧▽≦", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
