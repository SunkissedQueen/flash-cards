import Header from "../components/Header" 
import { Card, CardBody, CardText } from "reactstrap"

const FlashIndex = ({ flashCards, reveal }) => {

  return(
    <>
      <Header />
      <div className="page-center">
        {flashCards.map((card, index) => {
          return(
            <div key={index} onClick={() => reveal(index)}>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardText>
                    {
                      card.flip
                      ? card.definition
                      : card.term
                    } 
                  </CardText>
                </CardBody>
              </Card>
            </div>
          ) 
        })}
      </div>
    </>
  )
}

export default FlashIndex 