let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `๐๐ข๐๐ก ๐๐ ๐๐ฅ๐จ๐ฃ ๐ข๐๐๐๐๐๐๐ ๐ฉ๐ฌ๐ฅ๐๐ก๐ซ ๐๐ข๐ง*\n\n\nโโโใ Dแดษด'แด าแดสษขแดแด Dแดษดแดแดษชแดษด ใโโโ`,
	rows: [
	    {title: '๐ โบ Group ๐ฉ๐ฌ๐ฅ๐๐ก๐ซ', description: "Group Utama ๐ฉ๐ฌ๐ฅ๐๐ก๐ซ", rowId:".gcbot"},
        {title: '๐ง โบ Group Full Bot', description: "Gruop Ketiga", rowId:".gcbot3"},
        {title: '๐ โบ Owner', description: "Creator ๐ญ๐ฌ๐๐จ๐๐ก >ฯ<", rowId:".owner"},
        {title: '๐งฟ โบ Info Fangz BOT', description: "Info ๐ฉ๐ฌ๐ฅ๐๐ก๐ซ >ฯ<", rowId:".info"},
        {title: '๐ฎ โบ Donasi', description: "Donasi Untuk ๐ญ๐ฌ๐๐จ๐๐ก โงโฝโฆ", rowId:".donasi"},
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
