import styled from "@emotion/styled";


export const MainCointainer = styled.main`
    display: flex;
    justify-content: space-evenly;
    padding: 30px 30px;
`

export const InputContainers = styled.div`
    display: flex;
    flex-direction: column;
`

export const PreviewContainer = styled.div`
    display: flex;
`

export const AdressForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #646cff;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid white;
    margin: 1rem;
    
    & input {
        background-color: rgba(191, 63, 255, 0.5);
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
    }
`



// Education Elements
export const EducationContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    
    :hover {
        transform: scale(1.05);
    }
`

export const EducationContainerTitle = styled.h2`
`