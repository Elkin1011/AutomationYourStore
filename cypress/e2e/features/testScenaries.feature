  Feature: Iniciar sesión como usuario registrado
    Como usuario registrado
    Quiero poder iniciar sesión en mi cuenta
    Para acceder a mis datos y realizar acciones en la plataforma

    # @HU-REG-001
    # Scenario: Registro exitoso con datos válidos
    #   Given que el usuario está en la página de registro
    #   When el usuario completa todos los campos obligatorios con datos válidos
    #   And acepta los términos y condiciones
    #   And hace clic en el botón de Continuar
    #   Then el sistema muestra un mensaje de confirmación de registro exitoso
      
    # @HU-LOG-002
    # Scenario: Verificar que un usuario registrado pueda iniciar sesión
    #   Given que el usuario está en la página de inicio de sesión
    #   When el usuario introduce un correo electrónico y contraseña válidos
    #   And hace clic en el botón de Iniciar sesión
    #   Then el usuario es redirigido al Home
 
    # @HU-FOR-003
    # Scenario: Verificar restablecimiento cambio de contraseña
    #   Given que el usuario está en la página de olvidar contraseña 
    #   When el usuario introduce un correo electrónico válido
    #   And hace clic en Continuar
    #   Then el usuario es redirigido a la página de inicio de sesión 
    #   And el sistema muestra un mensaje de confirmación de cambio de contraseña enviado

  #  @HU-CAT-004
  #  Scenario: Ver todas las laptops y notebooks
  #     Given el usuario está en la página de inicio
  #     When el usuario navega a la sección "Laptops & Notebooks"
  #     And selecciona la opción "Show all laptops & notebooks"
  #     Then se muestra la lista completa de laptops y notebooks

  #  @HU-ADD-005
  #  Scenario: Añadir un MacBook Pro al carrito exitosamente
  #     Given el usuario está en la página de inicio
  #     When el usuario navega a la sección "Laptops & Notebooks"
  #     And selecciona la opción "Show all laptops & notebooks"
  #     And el usuario selecciona el producto "MacBook Pro"
  #     And hace clic en el bo  tón "Agregar al carrito"
  #     Then el producto "MacBook Pro" se agrega exitosamente al carrito de compras
  #     And se muestra un mensaje de confirmación
  #     And el total del carrito refleja el precio del "MacBook Pro"

  #  @HU-SEA-006
  # Scenario: Buscar y agregar una tablet Samsung Galaxy al carrito
  #     Given el usuario está en la página de inicio
  #     When el usuario ingresa "Samsung Galaxy Tablet" en la barra de búsqueda
  #     And hace clic en el botón de búsqueda
  #     Then se muestran los resultados de búsqueda relacionados con "Samsung Galaxy Tablet"
  #     When el usuario selecciona una tablet Samsung Galaxy de la lista de resultados
  #     And hace clic en el botón "Agregar al carrito"
  #     Then la tablet Samsung Galaxy se agrega correctamente al carrito de compras
  #     And se muestra un mensaje de confirmación

  #  @HU-DEL-007
  # Scenario: Eliminar una MacBook Pro del carrito de compras
  #     Given el usuario está en la página de inicio
  #     And que el usuario ha agregado una MacBook Pro al carrito
  #     When el usuario accede al carrito de compras
  #     Then elimina la MacBook Pro del carrito

  # @HU-SEL-008
  # Scenario: Agregar otra unidad de la tablet Samsung Galaxy al carrito
  #     Given el usuario está en la página de inicio
  #     And que el usuario ha agregado una tablet Samsung Galaxy al carrito
  #     When el usuario accede al carrito de compras
  #     And aumenta la cantidad de la tablet Samsung Galaxy a 2
  #     Then se muestra un mensaje de confirmación
  #     And el total del carrito refleja el precio de 2 unidades de la tablet Samsung Galaxy

  # @HU-CHE-009
  # Scenario: Completar la compra hasta la confirmación de la orden
  #     Given el usuario inicia sesión  
  #     And que el usuario ha agregado una tablet Samsung Galaxy al carrito  
  #     When el usuario accede al carrito de compras  
  #     And el usuario hace clic en "Proceder al pago"  
  #     Then el usuario es redirigido a la página de pago  
  #     When el usuario ingresa su dirección de envío y métodos de pago  
  #     When el usuario hace clic en "Confirmar compra"  
  #     Then el usuario recibe un mensaje de confirmación con el número de orden  
  #     And se muestra una página de confirmación de la orden  
