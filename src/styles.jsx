import styled from "@emotion/styled";


export const MainCointainer = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 30px;
`

export const AdressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    & input {
        background-color: rgba(191, 63, 255, 0.5);
    }
`