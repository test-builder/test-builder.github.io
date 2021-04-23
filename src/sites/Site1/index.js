import { useState } from "react";
import { Helmet } from "react-helmet";
import Portfolio from "../../templates/Portfolio";
import * as views from '../../views'
import s from './structure.json'

export default function Site(props) {
  const [structureViews, setStructureViews] = useState(s.views)

  return (
    <Portfolio>
      <Helmet>
        <title>{structureViews.title}</title>
      </Helmet>
      {structureViews.map((view, i) => {
        const {component, ...p} = view
        const Component = views[component]
        return (
          <Component structure={p} updateStructure={(updatedStructure) => {
            setStructureViews(structureViews.map((sv, svi) => {
              if (svi !== i) return sv
              
              return {
                component,
                ...updatedStructure,
              }
            }))
          }} {...p} disabled={props.disabled} />
      )})}
    </Portfolio>
  )
}