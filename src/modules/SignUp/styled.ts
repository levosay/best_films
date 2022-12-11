import styled from 'styled-components'
import { colors } from 'utils/constants'

export const SignUpModuleStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 32px auto 0;
	padding: 32px;
	border-radius: 10px;
	box-shadow: 0 10px 20px 5px ${colors.greyDark};
`

export const HeaderTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 32px;
`

export const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
