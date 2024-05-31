// TODO: 取得 mock 資料夾內的對話清單假資料

// TODO: 從 components 內載入 UserMessage 與 AIMessage 這兩個 React 元件

export default function Home() {

  // TODO: 設計一個函式處理表單送出時的邏輯，這個函式必須處理：
  //       1. 能將使用者輸入的訊息使用POST Method送給後端API
  //       2. 後端API回傳的AI回覆訊息必須加入到對話清單中

  // TODO: 準備將取得到的對話清單假資料整理成可供渲染的格式(React元件)

  return (
    <>
      <main className="flex flex-col bg-gradient-to-r from-slate-100 to-slate-200 h-screen">
        <div className="chat-room w-full h-full flex-1 overflow-y-scroll">
        </div>
        <form
          className="chat-input-group w-full flex px-3 py-3"
        // TODO: 當表單送出時，設計一個函數負責處理相關邏輯
        >
          <input
            // TODO: 當輸入框的資料有變動時，需要有一個react的state(狀態)取得到輸入框的值
            placeholder="Type your message here..."
            type="text"
            className="block flex-1 border-2 border-slate-200 rounded-l-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-200"
            required
          />
          <button type="submit" className="bg-indigo-500 text-white font-semibold rounded-r-md px-3 py-2 hover:opacity-90 focus:opacity-70 duration-200">Send</button>
        </form>
      </main>
    </>
  );
}
