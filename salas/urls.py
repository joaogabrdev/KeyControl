from django.urls import path
from . import views

urlpatterns = [
    path('', views.status_todas_salas, name='status_todas_salas'),
    path('<int:sala_id>/', views.status_sala, name='status_sala'),
    path('<int:sala_id>/alternar/', views.alternar_status),
]