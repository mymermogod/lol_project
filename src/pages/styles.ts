import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: row;

    > div {
        width: 50%;
    }

    h1 {
        color: #1e255e;
        font-size: 56px;
        font-weight: bold;
    }

    h6 {
        margin-top:-10px;
        font-weight: normal;
        padding-right: 10px;
    }
`

export const ColumnImage = styled.div`
text-align: right;
margin-top: -80px;
margin-left: 220px;
`