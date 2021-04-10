<script>
  import { ButtonSet, Button } from 'carbon-components-svelte'
  import SearchForm from './NavbarSearchForm.svelte'

  let opened = false
</script>

<ButtonSet role="navigation" aria-label="main navigation">
  <Button href="#/issues/new" kind="secondary">New issue</Button>
  <Button href="#/issues" kind="secondary">Issues</Button>
</ButtonSet>
