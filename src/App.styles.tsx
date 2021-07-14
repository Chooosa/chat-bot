import styled from 'styled-components'

interface WrapperProps {
   backgroundImg: string
}

export const Wrapper = styled.div<WrapperProps>`
   width: 100vw;
   min-height: 100vh;
   display: flex;
   justify-content: center;

   background-image: url(${props => props.backgroundImg});
   background-repeat: no-repeat;
   background-size: cover;
`

export const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   display: flex;
   justify-content: center;
   align-items: center;
`