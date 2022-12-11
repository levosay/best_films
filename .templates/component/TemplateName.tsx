import { FunctionComponent } from 'react'
import { ITemplateNameProps } from './TemplateName.d'
import { TemplateNameStyled } from './styled'

export const TemplateName: FunctionComponent<ITemplateNameProps> = (): JSX.Element => {
  return (
    <TemplateNameStyled>TemplateName Component</TemplateNameStyled>
  )
}
