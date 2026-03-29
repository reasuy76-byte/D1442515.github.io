// 占卜結果資料庫 (可自行修改內容)
const fortunes = [
    { title: "🌟 大吉・星光燦爛", desc: "工作進展神速，學業上有如神助。愛情方面會遇到頻率相同的人，金錢運勢極佳，適合小額投資。", quote: "越努力，越幸運！" },
    { title: "🧧 小吉・平穩如意", desc: "生活步調雖然緩慢，但各方面都在穩定成長。愛情是細水長流，金錢上適合儲蓄。", quote: "平凡的累積是偉大的開始。" },
    { title: "💼 工作・升遷之兆", desc: "最近在職場上的表現會被看見，是展現才華的好時機。學業適合複習舊知，會有新發現。", quote: "自信是成功的第一秘訣。" },
    { title: "❤️ 愛情・桃花盛開", desc: "人緣爆棚，單身者有機會脫單，有伴者感情升溫。金錢上可能會有意外的邀約花費。", quote: "愛，就在下一個轉角。" },
    { title: "📖 學業・金榜題名", desc: "思緒清晰，邏輯極佳，非常適合處理複雜的考題或專案。工作則需注意細節，避免粗心。", quote: "知識就是力量。" },
    { title: "💰 財運・偏財入庫", desc: "最近可能會有一筆意外之財，可能是發票中獎或長輩紅包。生活上要注意不要因為心情好而亂花錢。", quote: "理財就是理生活。" },
    { title: "⛅ 末吉・靜候時機", desc: "目前可能感到些許迷惘，建議多聽少說。工作與學業維持現狀即可，不宜做重大決定。", quote: "等待，是為了跳得更高。" },
    { title: "🧘 靈感・沉澱自我", desc: "比起往外衝，現在更適合獨處。愛情與金錢運勢平平，但精神層次會獲得提升。", quote: "聽從內心的聲音。" },
    { title: "⚡ 挑戰・突破瓶頸", desc: "會遇到一些難題，但只要撐過去，你的能力會大幅成長。金錢上要避免借貸關係。", quote: "沒有礁石，激不起美麗的浪花。" },
    { title: "🍬 驚喜・小小幸運", desc: "今天會遇到好吃的東西或好久不見的朋友。整體運勢溫馨，適合給自己買個小禮物犒賞一下。", quote: "生活的小確幸是最好的良藥。" }
];

// 取得 HTML 元素
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const setupArea = document.getElementById('setup-area');
const resultArea = document.getElementById('result-area');
const crystalBall = document.getElementById('ball');

const resTitle = document.getElementById('res-title');
const resDesc = document.getElementById('res-desc');
const resQuote = document.getElementById('res-quote');

// 點擊「開啟今日運勢」
drawBtn.addEventListener('click', startFortune);
crystalBall.addEventListener('click', startFortune);

function startFortune() {
    // 增加一點點震動效果
    crystalBall.style.animation = "shake 0.5s";
    
    setTimeout(() => {
        // 隨機選一個結果
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const result = fortunes[randomIndex];

        // 填入內容
        resTitle.innerText = result.title;
        resDesc.innerText = result.desc;
        resQuote.innerText = result.quote;

        // 切換顯示區塊
        setupArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
        crystalBall.style.animation = "";
    }, 500);
}

// 點擊「再占卜一次」
retryBtn.addEventListener('click', () => {
    setupArea.classList.remove('hidden');
    resultArea.classList.add('hidden');
});
