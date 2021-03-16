# Laravel 

The content of this cheat sheet was mostly taken from the video made by [sarthaksavvy](https://github.com/sarthaksavvy) - Sarthak Shrivastava. And the video can be seen [here](https://youtu.be/BXiHvgrJfkg).

Laravel uses the software design pattern MVC (Model View Controller)

<p align="center">
  <img width="300" src="https://i.ibb.co/B6Brqbg/MVC.png">
</p>

An example of this structure.
```
http://yourapp.com/users/profile/1

/routes
	users/profile/:ide = Users.getProfile(id)

/controller
	class Users{
		function get Profile(id){
			profile = this.UserModel.getProfile(id)
			
			renderView('users/profile', profile)
		}
	}

/models
	Class UserModel{
		function getProfile(id){
			data = this.db.get('SELECT * FROM users WHERE id = id')
			return dta;
		}
	}

/views
	/users
		/profile
		<h1>{{profile.name}}</h1>
		<ul>
			<li>Email: {{profile.email}}</li>
			<li>Phone: {{profile.phone}}</li>
		</ul>
```
The user sends a request, usually through Router. The controller receives the request and depending on that request activates a function on MODEL that manipulates the DB. The information from the DB goes through  MODEL to the controller and the CONTROLLER changes the VIEW with the data receive from the MODEL. And finally the USER sees the VIEW on the BROWSER.

### MODELS
In Laravel MODELS are located in /App. The default MODEL is User.php and that simple class we call it MODEL because it interacts with the database.

### CONTROLLER
In Laravel the CONTROLLER is located in /App/Http/Controllers and in the Controller.php is the "base controller". We never use it but we extend it in every other controller we create in the future

### VIEWS
The views are located in /resources/views and there can be found the all the VIEWS. Most of the time for these views is used a "template engine" which in Laravel is Blade. To create a view just use the extension .blade.php

----
## Using Laravel
To iniate a Laravel project
```bash
laravel new Project
```

Where project is any name you want for the project.

When creating a new route we should indicate the function on the controller that must be activated for that route (check the example lines above). For that we can do something like this.
```php
Route::get('/user', 'UserController@index');
```

And that "index" corresponds to the function "index" on the controller.
```php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return 'I am in UserController';
    }
}
```

To create a controller the next command can be used.
```bash
php artisan make:controller UserController 
```

## Connection with DataBase
Connection with PDO (PHP Data Objects) to MySQL using WSL. An example for this configuration on the .env file could be.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=password
```

When using MySQL locally, DB_HOST should be set to `local`.

Also important, the SCHEMA is refering to the database structure.
Migrations are in /databes/migration and using the next command we will be able to create the tables specified inside the migrations directory.
```bash
php artisan migrate
```

The the next tables will be created

<p align="center">
  <img width="200" src="https://i.ibb.co/rpsP1KP/Tables.png ">
</p>

The migrations table is the way Laravel knows wich tables have been already migrated.

Every model is going to interact with database. User model (singular) is going to interact with users table (plural)

`:: <—` This is called Scope Resolution Operator (to use function of a static class)
To insert something on the DB.

```php
DB::insert('inser into users (name,email,passord) values (?,?,?)',[
	'userName', 'user@email.com', 'password'
])
```

I can  type this inside the index function. Also it is recommended to to have a function for each Query

## Eloquent ORM
It means Object Relational Mapping
Each database table has a corresponding "Model" which is used to interact with that table. Models allow you to query for data in your tables, as well as insert new records into the table.

To see the model of something we can use.
```php
$user = new User();
dd($user);
```

And to create a user
```php
$user = new User();

$user -> name = 'userName';
$user -> email = 'user@email.com';
$user -> password = 'password';

$user -> save();
```

A new entry will appear in the DB.
How te fetch all the table from the model User

**IMPORTANT:** `all()` is not a static method.
```php
$user = User::all();
return $user;
```

When we return $user there will be no password because the User.php model has it as protected $hidden. So using Eloquent the password will get encrypted

To delete something I can use:
```php
User::where('id',3)->delete();
```

The way it works is that first you must specify the thing you want to delete and then use `delete()`.
Also to encrypt a password we can use `bcrypt()`.
```php
$user -> password = bcrypt('password');
```

To update with Eloquent
```php
User::where('ide',4)-> update(['name' => 'John Doe']);
```

Alto to create a new "user", for example, we can create it this way.
```php
$data = [
	'name' => 'Elon',
	'email' => 'elon@spacex.com',
	'password' => 'falcon9'
];

User::create($data);
```

If the the "fillable" and the "protected" are removed from the Model `User.php` we will have an error.
Mass assignment means that we are assigning all the fields at the same time. Because maybe there are fields that we don't want to insert. Even if we try to add an aditional field it won't be added. Because the fillable methos specifies which field are going to be taken.

A mass-assignment vulnerability occurs when a user passes an unexpected HTTP parameter through a request, and that parameter changes a column in your database you did not expect. For example, a malicious user might send an `is_admin` parameter through an HTTP request, which is then passed into your model's create method, allowing the user to escalate themselves to an administrator.

So, to get started, you should define which model attributes you want to make mass assignable. You may do this using the `$fillable` property on the model. 

While `$fillable` serves as a "allow list" of attributes that should be mass assignable, you may also choose to use `$guarded`. The `$guarded` property should contain an array of attributes that you do not want to be mass assignable. All other attributes not in the array will be mass assignable. So, `$guarded` functions like a "deny list". Importantly, you should use either `$fillable` or $guarded - not both.

```php
protected $guarded = [];
protected $fillable = [
	'name', 'email', 'password',
];
```

If we want to `bcrypt` all the passwords entered to de DB, we can use Mutators. And we use them inside the model. Take a look a the syntax to follow that structure.
Mutator: mutates, changes the behavior of the field

```php
public function setPasswordAttribute($password)
{
	$this->attributes['password'] = bcrypt($password);
}
```

Mutator accessor is another tool. It only modifies the result on the website. But changes nothing on the database.
```php
public function getNameAttribute($name)
{
	return 'Myname is: '. ucfirst($name);
}
```

## Laravel UI

To install authentication we need to install
```bash
composer require laravel/ui
```

Having laravel/ui now we can create an authentication UI. And it will create basic log and registration views and routes. And the next command will do that.
```bash
php artisan ui:auth
```

It will create a new controller, etc. and a new views. Being more specific it will create a "home" controller and other several controller on "auth" directory. Also this command will add login and registration buttons on the page.

At this point registration and login looks like shit. So it needs a new UI. For that we have options. One of them is Bootstrap and we can add it.
```bash
php artisan ui bootstrap
```

It will say run "npm install && npm run dev". 
NOTE: First we need to have installed Node and NPM. Running the last two commands will fix the Laravel shitty UI issue.

In welcome.blade.php `@if (Route::has('login')` is making sure that the Laravel UI exists and the login controller.
```bash
php artisan route:list
```

And if it exists shows or not the login, register o home buttons.
The home.blade.php section "content"
```html
@section('content')
<div class="container">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">{{ __('Dashboard') }}</div>

				<div class="card-body">
					@if (session('status'))
						<div class="alert alert-success" role="alert">
							{{ session('status') }}
						</div>
					@endif
						{{ __('Your are logged in!') }}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
```

Corresponds to the @yield('content') in `app.blade.php`
```html
<main class="py-4">
	@yield('content')
</main>
```

That means it works as include/require

All the configurations are inside the config directory. And in app.php there can be found the aliases.
Instead of using a helper function, an alias can be used. For example:
```php
// Helper function
return view('welcome');

// Alias Support/Facade
return View::make('welcome');
```

## Upload Image for User

The images will be stored in `storage/app/public`
To avoid malicious programms to excute commands on behalf of a user. We have to use a token look a CSRF. An we have to add `@csr`f on the form.

The second option has more control
```php
Route::post('/upload', function(){
	dd(request()->all());
});

Route::post('/upload', function(Request $request){
	dd($request->all());
});
```

When uploading a file use `enctype='multipart/form-data'` in the form.
To sore an image we can use the next command.
```php
$request->image->store('image', 'public');
```

Public specifies the directory inside `storage/app`
If we want to add a new column php artisan migrate won't work
For this we have to use the command.
```bash
php artisan migrate:refresh
```

## Flash Session

First, sessions provide a way to store information about the user across multiple requests. Laravel ships with a variety of session backends that are accessed through an expressive, unified API. And there are some options that let us store information for a short period of time. For example, we want the webpage to return a message to us, when an upload has been successful. It should appear once, and after a "refresh" it should disappear. And we can do that through session->flash. Also to store data we can use.
```php
session()->put('message', 'Image Uploaded');
```

And to show it just once
```php
$request->session()->flash('message', 'Image Uploaded');
```

And we can use both on the controller.
When we want to include something, that path most be given inside the "views" directory. For example: `layouts.flash`
```html
@include('layouts.flash')
```

We can create **components** on blade. Like an alert. Using the command.
```bash
php artisan make:component Alert
```

And it creates a blade file and a php file. On the blade file there has to be only one tag. We paste the code inside of it and we use the next command to call it.
```html
<x-alert/>
```

With include we cannot pass anything inside that document. But with the component we can pass that shit. With **slots** we can put some stuff between the tags (<x-….>).
And on the component we use
```php
{{ $slot }}
```

## MiniProject - ToDo List

todo
- Title: string
- Completed: boolean

We need a model for the table  'todo'

- Model 'todo'
- Migration todo
- Routes 
- Controller

```bash
php artisan make:model Todo -mc
```

With that command we create the **model** and at the same time we create the **controller** and the **migration** file. The next step is to modify the migration file to set all the columns we want on the table. Then we execute the **migration** command.

And the we create hte routes to any functionatlity we want.
To handle errors there's proper way to do so. On the controller we can use.
```php
$request->validate([
	'title'=>'required|max:255'
]);
```

With this method, the validation will not execute the code after it. And the alert file will have something like this.
```html
@if ($errors->any())
	<div class="py-4 px-2 bg-red-300">
		<ul>
			@foreach ($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif
```

This other code does not prevent the execution of other code.
```php
$rules = [
	'title' => 'required|max:255',
];
$messages = [
	'title.max' => 'Todo title should not be greater than 255 chars.'
];
$validator = Validator::make($request->all(), $rules, $messages);
```

We can put all this stuff in its own file by creating a validation form.
```bash
php artisan make:request TodoCreateRequest
```

And on the new request make sure that authorize is true
```php
public function authorize()
{
	return true;
}
```

This means that every person that tries to use the validation form is authorized.
And then use the same rules on the new request file.
```php
public function rules()
{
	return [
		'title' => 'required|max:255',
	];
}
```

And to use it, instead of "Request" use our own "TodoCreateRequest". And the 
```php
use Illuminate\Http\Request;
```

Will no longer be necessary. And also to add the messages just add the next funcion no the new request.
```php
public function messages()
{
	return [
		'title.max' => 'Todo title should not be greater than 255 chars.',
	];
}
```

With that the conroller will be very simple again.

## To show all the ToDo's

This goes in the controller
```php
public function index()
{
	$todos = Todo::all();
	return view('todos.index')->with(['todos' => $todos]);
}
```

And on the `index.blade.php` we insert something like this to show them all
```html
<ul>
	@foreach($todos as $todo)
	<li>
		{{$todo -> title}}
	</li>
	@endforeach
</ul>   
```

And also it is advised to create a layout for todos inside the todos folder in views.

Another syntasis for the controller is. This send the todos to the `blade.php`
```php
public function index()
{
	$todos = Todo::all();
	// return view('todos.index')->with(['todos' => $todos]);
	return view('todos.index',compact('todos'));
}
```

## Dynamic Routes

With the next code we specify which todo are we talking about.
```html
<a href="{{'/todos/' . $todo->id . '/edit'}}" class="mx-5 py-1 px-1 bg-orange-400 cursor-pointer rounded text-white">Edit</a>
```

The we change the route
```php
Route::get('/todos/{id}/edit', 'TodoController@edit');
```

And we receive it in the controller
```php
public function edit($id)
{
	dd($id);
	return view('todos.edit');
}
```

The other way to do it is by using the model
```php
public function edit(Todo $todo) //id
{
	dd($todo->title);
	return view('todos.edit', compact('todo'));
}
```

The route
```php
Route::get('/todos/{todo}/edit', 'TodoController@edit');
```

And the the names most match

NOTE: This is by using the id of the table

If we want to create the route with the 'title' for example, we do the next
```php
Route::get('/todos/{todo:title}/edit', 'TodoController@edit');
```

The other option instead of this is using
```php
Route::get('/todos/{todo}/edit', 'TodoController@edit');
```

And use the next on the model
```php
public function getRouteKeyName()
{
	return 'title';
}
```

## Named Routes

```php
Route::patch('/todos/{todo}/update', 'TodoController@update')->name('todo.update');
```

And in the `blade.php`
```html
<form action="{{route('todo.update')}}" method="post" class="py-5">
	@csrf
	<input type="text" name="title" value="{{$todo->title}}" class="py-2 px-2 border">
	<input type="submit" value="Update" class="p-2 border rounded">
</form>
```

Asset looks inside public folder