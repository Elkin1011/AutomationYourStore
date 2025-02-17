Feature: Iniciar sesión como usuario registrado
  Como usuario registrado
  Quiero poder iniciar sesión en mi cuenta
  Para acceder a mis datos y realizar acciones en la plataforma

  @HU-REG-001
  Scenario: Registro exitoso con datos válidos
    Given que el usuario está en la página de registro
    When el usuario completa todos los campos obligatorios con datos válidos
    And acepta los términos y condiciones
    And hace clic en el botón de Continuar
    Then el sistema muestra un mensaje de confirmación de registro exitoso
    
  @HU-LOG-002
  Scenario: Verificar que un usuario registrado pueda iniciar sesión
    Given que el usuario está en la página de inicio de sesión
    When el usuario introduce un correo electrónico y contraseña válidos
    And hace clic en el botón de Iniciar sesión
    Then el usuario es redirigido al Home

  @HU-FOR-003
  Scenario: Verificar restablecimiento cambio de contraseña
    Given que el usuario está en la página de olvidar contraseña 
    When el usuario introduce un correo electrónico válido
    And hace clic en Continuar
    Then el usuario es redirigido a la página de inicio de sesión 
    And el sistema muestra un mensaje de confirmación de cambio de contraseña enviado

# @HU-SEL-004
#  Scenario: Ver todas las laptops y notebooks
#     Given el usuario está en la página de inicio
#     When el usuario navega a la sección "Laptops & Notebooks"
#     And selecciona la opción "Show all laptops & notebooks"
#     Then se muestra la lista completa de laptops y notebooks