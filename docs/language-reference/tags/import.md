`import`
========

{% raw %}

Twig supports putting often used code into [`macros`][macro-tag-url]. These macros can go into different templates and get imported from there.

There are two ways to import templates. You can import the complete template into a variable or request specific macros from it.

Imagine we have a helper module that renders forms (called `forms.html`):

````twig
{% macro input(name, value, type, size) %}
    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
{% endmacro %}

{% macro textarea(name, value, rows, cols) %}
    <textarea name="{{ name }}" rows="{{ rows|default(10) }}" cols="{{ cols|default(40) }}">{{ value|e }}</textarea>
{% endmacro %}
````

The easiest and most flexible is importing the whole module into a variable. That way you can access the attributes:

````twig
{% import 'forms.html' as forms %}

<dl>
    <dt>Username</dt>
    <dd>{{ forms.input('username') }}</dd>
    <dt>Password</dt>
    <dd>{{ forms.input('password', null, 'password') }}</dd>
</dl>
<p>{{ forms.textarea('comment') }}</p>
````

Alternatively you can import names from the template into the current
namespace:

````twig
{% from 'forms.html' import input as input_field, textarea %}

<dl>
    <dt>Username</dt>
    <dd>{{ input_field('username') }}</dd>
    <dt>Password</dt>
    <dd>{{ input_field('password', '', 'password') }}</dd>
</dl>
<p>{{ textarea('comment') }}</p>
````

> To import macros from the current file, use the special `_self` variable for the source.

{% endraw %}


[back]({{ site.baseurl }}{% link language-reference/tags/index.md %})

[macro-tag-url]: {{ site.baseurl }}{% link language-reference/tags/macro.md %}
