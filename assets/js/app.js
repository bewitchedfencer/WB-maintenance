auth.onAuthStateChanged(function(user){
    if(user){
        $("#whereItHappens").empty().html(`<div class="col-xs-12 col-xs-offset-9">
        <p class="sort-by">Sort By:
            <span>dropdown-menu</span>
        </p>
    </div>
</div>
<div class="row">
    <div class="col-xs-12 myTable">
        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Priority Level</th>
                    <th>Address</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Site</th>
                    <th>Contact Information</th>
                    <th>Notes Logged</th>
                </tr>
            </thead>
            <tbody id="maintenanceItems">

            </tbody>
        </table>
    </div>
</div>
<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">New Maintenance Item</h4>
            </div>
            <div class="modal-body">
                <form>
                    <fieldset>
                        Address (Unit and Street):
                        <br>
                        <input type="text" name="address" id="address" class="mInput">
                        <br> Maintenance Category:
                        <br>
                        <select class="form-control" id="allCatsMaintenance">
                            <option>Choose the Maintenance Category</option>
                            <option>Central A/C Issue</option>
                            <option>Wall A/C Issue</option>
                            <option>Carpentry</option>
                            <option>Door Repair/Replacement</option>
                            <option>Drywall Repair</option>
                            <option>Electrical Repair/Renovation</option>
                            <option>Fencing</option>
                            <option>Flooring Repair/Renovation</option>
                            <option>Gutters/Downspouts</option>
                            <option>Keys and Locks</option>
                            <option>Masonry and Concrete</option>
                            <option>OH Door Issue</option>
                            <option>Other</option>
                            <option>Painting</option>
                            <option>Paving</option>
                            <option>Pest Control</option>
                            <option>Plumbing</option>
                            <option>Roof Leaks</option>
                            <option>Septic System Issues</option>
                            <option>New Signs Needed</option>
                            <option>Sump Pump Issues</option>
                            <option>Tree Work Needed</option>
                            <option>Turnover Between Tenants</option>
                            <option>Window Repair/Replacement</option>
                        </select>
                        <br> Site:
                        <br>
                        <select class="form-control" id="all-sites">
                            <option>Choose the Site</option>
                            <option>Twinwise Properties, LTD, LLLP</option>
                            <option>Wise Brothers Properties, LTD, LLLP</option>
                            <option>Suberman Trust, WBP, LTD, LLLP</option>
                            <option>ABC Business Center, LLC</option>
                        </select>
                        <br> Description of Issue:
                        <br>
                        <input type="text" name="description" id="description" class="mInput">
                        <br> Tenant Contact Information:
                        <br>
                        <br>Name:
                        <br>
                        <input type="text" name="name" id="name" class="mInput">
                        <br>Phone/Email:
                        <br>
                        <input type="text" name="contact" id="contact" class="mInput">
                        <br>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-dismiss="modal" id="submit-button">Submit</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
        </div>

    </div>
</div>`);
        $("#myContainer").prepend(`
        <div class="container-fluid">
        <nav class="navbar navbar-default">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div id="logoBox">
                <a class="navbar-brand" href="http://www.warehouseorlando.com" target="_blank">
                    <img class="logo img-responsive" src="assets/images/logo.bmp">
                </a>
                </div>
            </div>
            <div class="page-title text-center pull-left align-text-bottom">Maintenance Home</div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Site Inspections
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Twinwise Properties</a>
                            </li>
                            <li>
                                <a href="#">Wise Brothers Properties</a>
                            </li>
                            <li>
                                <a href="#">Suberman Trust, Wise Brothers Properties</a>
                            </li>
                            <li>
                                <a href="#">ABC Business Center</a>
                            </li>
                        </ul>
                    </li>
                    <li role="button" data-toggle="modal" data-target="#myModal" id="add-maintenance">Add Maintenance Item</li>
                    <li class="logins" id="logout">Logout
                    </li>
                </ul>
            </div>
            </nav>
        </div>`);
        console.log("logged in to maintenance site");
    }
    else{
        $("#whereItHappens").empty().html(`<p class="text-center" id="goodbye">Thank you for using Wise Brothers, Inc maintenance program.`);
    }
});

