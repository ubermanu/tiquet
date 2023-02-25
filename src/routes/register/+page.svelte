<div class="container mx-auto px-6 my-10">
  <form action="?/register" method="POST" class="max-w-xs mx-auto">
    <fieldset>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" name="email" class="input input-bordered w-full" />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input type="password" name="password" class="input input-bordered w-full" />
      </div>
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Confirm Password</span>
        </label>
        <input type="password" name="passwordConfirm" class="input input-bordered w-full" />
      </div>
      <div class="form-control w-full mt-6">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </fieldset>
  </form>
</div>
