from django.urls import path
from accounts import views as UserViews
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [
    path('register/', UserViews.RegisterView.as_view()),

    # it takes the username and password and returns the token 
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # it takes the refresh token and returns the access token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('protected-view/', UserViews.ProtectedView.as_view())
]
