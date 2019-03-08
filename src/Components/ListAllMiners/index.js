import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import minersList from '../../GraphQL'
import TopBar from '../BannerTopBar'
import LinkIcon from '@material-ui/icons/Link'
import MaterialTable from 'material-table'

class ListAllMiners extends Component {

  render () {
    let data = this.props.data

    if (data.loading) {
      return (
        <TopBar
          size='big'
          title='ALGO Miners'
          text='Loading ALGO Miners...'
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else if (data.miners_Miners && data.miners_Miners.length > 0) {
      return (
        <React.Fragment>
          <TopBar
            size='medium'
            title='ALGO Miners'
            text='All ALGO Miners are listed here.'
            backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
          />

          <div className='container'>
            <MaterialTable
              columns={[                
                { title: 'Contract Address', field: 'address' },
                { title: 'Name', field: 'name' },
                { title: 'Type', field: 'type' },
                { title: 'Category', field: 'category' },
              ]}
              data={data.miners_Miners}
              title="Miners List"
              actions={[
                {
                  icon: LinkIcon,
                  tooltip: 'View on blockchain',
                  onClick: (event, rowData) => {
                    window.open("https://etherscan.io/token/"+rowData.address)
                  },
                },
              ]}
              options={{
                toolbar: false,
                paging: false,
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </React.Fragment>
      )
    } else if (data.error) {
      return (
        <TopBar
          size='big'
          title='ALGO Miners'
          text={'There has been an error loading ALGO Miners.'}
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else {
      return (
        <TopBar
          size='big'
          title='ALGO Miners'
          text="Any ALGO Miners was found yet."
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
          />
      )
    }
  }

}

export default graphql(minersList.MINERS_MINERS)(ListAllMiners)
