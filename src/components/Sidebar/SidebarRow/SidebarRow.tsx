import { Avatar, SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import React from 'react'
import './SidebarRow.css'

export interface SidebarRowProps {
    src?: string
    Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
    title: string
}

const SidebarRow:React.FC<SidebarRowProps> = ({src, Icon, title}) => {
    return <div className="sidebarRow">
        {src && <Avatar src={src}/>}
        {Icon && <Icon />}
        <h4>{title}</h4>
        </div>
}

export default SidebarRow
