import styled from 'styled-components'

export const ChatWrapper = styled.div`
   width: 100%;
   max-width: 800px;
   height: 100%;
   max-height: 800px;
   border-radius: 40px;
   border: 2px solid #7e7e7e;
   padding: 40px;

   background: rgba( 255, 255, 255, 0.25 );
   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
   backdrop-filter: blur( 8px );

   overflow-x: hidden;
   overflow-y: auto;

   scrollbar-color: rgba(0, 0, 0, 0.3) transparent; //mozilla
   scrollbar-width: thin;
   /* полоса прокрутки (скроллбар)  */
   ::-webkit-scrollbar {
      width: 32px;
      background-color: transparent;
   }

   /* ползунок скроллбара */
   ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border: 12px solid transparent;
      border-radius: 16px;
      background-clip: padding-box;

   }

   ::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.5);
   }

   Стрелки
   ::-webkit-scrollbar-button:vertical:start:decrement,
   ::-webkit-scrollbar-button:vertical:end:increment,
   ::-webkit-scrollbar-button:horizontal:start:decrement,
   ::-webkit-scrollbar-button:horizontal:end:increment {
      display: none;
   }

`

export const ChatContainer = styled.div`
   width: 100%;
   height: 1000px;
   /* background-color: red; */
`