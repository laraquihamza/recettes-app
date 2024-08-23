import react, {Component} from "react"
const withPlaceholder= WrappedComponent =>
(props)=>(
                <WrappedComponent placeholder="Entrez un pseudo"
                {... props}
                />
)
export default withPlaceholder;
