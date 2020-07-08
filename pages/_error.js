import { Layout, Breadcumb, FilterTool, ProductCard } from '../_components'

function Error({ statusCode }) {
  return (
    <Layout>
      <Breadcumb
                links={[
                    { label: "Home", link:`/` },
                    { label: "error", link:`` },
                ]}

          /> 
      <div class="container">
					<section class="http-error">
						<div class="row justify-content-center py-3">
							<div class="col-md-7 text-center">
								<div class="http-error-main">
                {statusCode
                  ? (<><h2>{statusCode}!</h2><p>We're sorry, but an error ocurred</p></>)
                  : 'An error occurred on client'}
								{statusCode===404?(<p>The page you were looking for doesn't exist.</p>):""}
								</div>
							</div>
						</div>
					</section>

				</div>
        </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error