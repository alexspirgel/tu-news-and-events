import parse from 'html-react-parser';

const Summary = ({ node }) => (
  node.attributes.field_summary ? parse(node.attributes.field_summary.processed) : null
)

export default Summary;