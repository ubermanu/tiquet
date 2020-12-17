<script>
  import NavigationBar from './NavigationBar.svelte'

  export let url = ''

  // import IssueListPage from './IssueListPage'
  // import IssueDetailPage from './IssueDetailPage'
  // import IssueCreatePage from './IssueCreatePage'
  // import NotFoundPage from './NotFoundPage'
  // import IssueEditPage from './IssueEditPage'
  // import ToastRenderer from './ToastRenderer'
  // import SearchResultPage from './SearchResultPage'
</script>

<main>
  <NavigationBar />
  <!--    <ToastRenderer />-->
  <section class="section">
    <!--        <Route exact path="/issue/:id">-->
    <!--          <IssueDetailPage />-->
    <!--        </Route>-->
    <!--        <Route exact path="/issue/:id/edit">-->
    <!--          <IssueEditPage />-->
    <!--        </Route>-->
    <!--        <Route exact path="/issues/new">-->
    <!--          <IssueCreatePage />-->
    <!--        </Route>-->
<!--    <Route exact path="/issues">-->
      <!--        <IssueListPage />-->
<!--    </Route>-->
    <!--      <Route exact path="/search">-->
    <!--        <SearchResultPage />-->
    <!--      </Route>-->
    <!--      <Route exact path="/">-->
    <!--        <Redirect to="/issues" />-->
    <!--      </Route>-->
    <!--      <Route path="*">-->
    <!--        <NotFoundPage />-->
    <!--      </Route>-->
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Powered by <a href="https://github.com/ubermanu/tiquet" target="_blank">Tiquet</a>
      </p>
    </div>
  </footer>
</main>
