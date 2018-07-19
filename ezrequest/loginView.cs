using Foundation;
using System;
using UIKit;

namespace ezrequest
{
    public partial class loginView : UIViewController
    {
        partial void LoginButton_TouchUpInside(UIButton sender)
		{
			lblInfo.Text = "This is working";
		}

		public loginView (IntPtr handle) : base (handle)
        {
        }
    }
}