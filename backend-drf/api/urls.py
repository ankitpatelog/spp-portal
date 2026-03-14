from django.urls import path,include
from accounts import views as UserViews
# jwt authentication using simple drf jwt 
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)

urlpatterns = [
    path('register',UserViews.RegisterView.as_view()), # for class based view we need to write as view()
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
