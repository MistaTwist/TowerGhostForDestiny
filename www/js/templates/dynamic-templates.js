_.templates = {};
_.templates["aboutTemplate"] = "<div>    <h2 style=\x22margin-top:0;\x22>Tower Ghost for Destiny        <br>Manage your gear anywhere</h2>    <p>        <strong>Version:            <span class=\x22version\x22>                <%= tgd.version %>            </span>        </strong>    </p>    <p>This is a hobby project by <a href=\x22https://github.com/dasilva333/\x22 target=\x22_system\x22>Richard Pinedo</a> and is not financed by or associated with Bungie. All information used on this app is the property of Bungie.</p>    <form action=\x22https://www.paypal.com/cgi-bin/webscr\x22 method=\x22post\x22 target=\x22_top\x22 style=\x22margin:0; padding:0;\x22>        <input type=\x22hidden\x22 name=\x22cmd\x22 value=\x22_s-xclick\x22>        <input type=\x22hidden\x22 name=\x22hosted_button_id\x22 value=\x225X265ELN4Y5FU\x22>        <input type=\x22image\x22 src=\x22https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif\x22 border=\x220\x22 name=\x22submit\x22 alt=\x22PayPal - The safer, easier way to pay online!\x22> via Paypal to keep this project alive, other options available under the Donate page in Settings.        <img alt=\x22\x22 border=\x220\x22 src=\x22https://www.paypalobjects.com/en_US/i/scr/pixel.gif\x22 width=\x221\x22 height=\x221\x22>    </form>    <h3>Current Features Supported:</h3>    <ul>        <li><a href=\x22http://destinydb.com\x22 target=\x22_system\x22>DestinyDB.com</a> tooltips option now display custom stats: perks, burn, level for armor and weapons</li>        <li>Loadouts sync across all devices via <a href=\x22http://www.TowerGhostForDestiny.com\x22 target=\x22_system\x22>www.TowerGhostForDestiny.com</a></li>        <li>Multiple primaries, special, heavy per loadout</li>        <li>Option to equip an item per bucket in your loadout</li>        <li>Equipping items & transferring items across characters</li>        <li>Specify amounts of consumables/materials to transfer</li>        <li>Filter by Perk Name, Description, Gun Name</li>        <li>Filter by item progress</li>        <li>Filter by burn (Kinetic, Arc, Solar, Void)</li>        <li>Filter by weapon type (Scout, Auto, Hand Cannon, etc...)</li>        <li>Filter by Tier (Exotic, Legendary, Rare, etc...)</li>        <li>Auto Refresh Toggle, Custom set seconds</li>        <li>Inline stat values on the item icons</li>        <li>Filter by Weapons, Armor or General items</li>        <li>Supports dual-linked accounts to Xbox and Playstation</li>        <li>Change emblem dynamically</li>        <li>Distribute consumables/materials equally across characters (normalize)</li>        <li>Move all of a consumable/material to a character (consolidate)</li>    </ul>    <h3>Latest News and Info</h3>    <a href=\x22https://twitter.com/TowerGhostApp\x22 target=\x22_system\x22>Follow me on Twitter @TowerGhostApp</a>    <h3>Support and New Issues:</h3>    <p><a href=\x22https://github.com/dasilva333/TowerGhostForDestiny\x22 target=\x22_system\x22>Github.com</a> or Contact me on via email <a href=\x22mailto:support@towerghostfordestiny.com\x22>support@towerghostfordestiny.com</a></p></div>";
_.templates["armorTemplates"] = "<ul class=\x22list-group\x22>    <%_.each(builds, function(build){ %>        <li class=\x22list-group-item\x22>            <div class=\x22row\x22>                <div class=\x22text-left col-lg-3\x22>                    <input class=\x22armorBuild form-control\x22 name=\x22armorBuild\x22 type=\x22radio\x22 value=\x22<%= build.title %>\x22>                </div>                <div class=\x22text-left col-lg-21\x22>                    <%= build.title %>-                        <%= _.map(_.sortBy(build.set,'bucketType'),tgd.armorTemplateDescriptionBuilder).reverse()	%>                </div>            </div>        </li>        <%}) %></ul>";
_.templates["donateTemplate"] = "<div id=\x22donate\x22>    <div class=\x22panel panel-success\x22>        <div class=\x22panel-body\x22>            <p data-bind=\x22text: $root.activeText().donation_instructions\x22>                This is a non-commercial project dedicated to Destiny. If you like this app provide a donation to keep this project alive and support the maintenance costs. Thank you.            </p>            <div class=\x22btn-padding\x22>                <div class=\x22form-group\x22>                    <a class=\x22donatePaypal btn btn-secondary btn-block\x22>                        <img src=\x22assets/paypal.png\x22>                    </a>                </div>                <div class=\x22supportsIAB\x22 style=\x22display:none;\x22>                    <div class=\x22chromeWallet form-group text-center\x22 style=\x22display:none;\x22>                        Donate now with Google Wallet                        <img src=\x22assets/wallet.png\x22 style=\x22width:50%\x22>                    </div>                    <div class=\x22googlePlay form-group text-center\x22 style=\x22display:none;\x22>                        Donate now with Google Play                        <img src=\x22assets/google_play.png\x22 style=\x22width:50%\x22>                    </div>                    <div class=\x22appleIAP form-group text-center\x22 style=\x22display:none;\x22>                        Donate now with Apple's In-App Purchase                        <img src=\x22assets/in-app-purchase.png\x22 width=\x2280\x22>                    </div>                    <hr>                    <div class=\x22form-group\x22>                        <a sku=\x22small\x22 class=\x22donate btn btn-secondary btn-block\x22>Small Donation</a>                    </div>                    <div class=\x22form-group\x22>                        <a sku=\x22medium\x22 class=\x22donate btn btn-secondary btn-block\x22>Medium Donation</a>                    </div>                    <div class=\x22form-group\x22>                        <a sku=\x22large\x22 class=\x22donate btn btn-secondary btn-block\x22>Large Donation</a>                    </div>                </div>            </div>        </div>    </div></div>";
_.templates["helpTemplate"] = "<div id=\x22help\x22 class=\x22help\x22>    <h2>Usage Guides</h2>    <ul>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3irno8/feature_sharing_and_viewing_arsenal_online/\x22>Sharing and Viewing Arsenal Online</a></li>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3inqkh/feature_transferring_items_with_tower_ghost/\x22>Transferring Items</a></li>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3irm1y/feature_transfer_methods_available_in_tower_ghost/\x22>Transfer Methods Available</a></li>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3imt9m/feature_tower_ghost_for_destiny_tooltips/\x22>Understanding the Tooltips</a></li>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3irqst/feature_using_the_filters_quickly_and_effectively/\x22>Using the filters quickly and effectively</a></li>        <li><a target=\x22_system\x22 href=\x22https://www.reddit.com/r/TowerGhostForDestiny/comments/3nlua1/feature_using_the_stats_tool_effectively/\x22>Using the stats tool effectively</a></li>    </ul>    <h2>Definitions</h2>    <ul>        <li>            <h3>Account Options</h3>        </li>        <li>            <strong>Logout</strong> Logs you out of Bungie.net allowing you to view your arsenal with a different account.</li>        <li>            <strong>PSN Login</strong> Opens the login page for the Playstation Network sign in, useful if your password changed.</li>        <li>            <strong>Live Login</strong> Opens the login page for the Windows Live sign in, useful if your password changed.</li>        <li>            <strong>Use Xbox Account</strong> Only visible if two accounts linked to your Bungie.net account.</li>        <li>            <strong>Use Playstation Account</strong> Only visible if two accounts linked to your Bungie.net account.</li>        <li>            <h3>Other Options</h3>        </li>        <li>            <strong>Clear Filters</strong> Resets all the filters back to their default state.</li>        <li>            <strong>About</strong> Displays information about the app and the author.</li>        <li>            <strong>Donate</strong> Paypal link to support the cause and keep the project alive.</li>        <li>            <strong>Language</strong> Allows you to set the menu and items to other languages (items only available in certain languages)</li>        <li>            <h3>Web Options</h3>        </li>        <li>            <strong>Share URL with friends</strong> Provides a custom link with your gamer tag to be able to share your inventory with friends online.</li>        <li>            <strong>DestinyStatus Report</strong> Opens a new page that allows you to see the current progress of all your characters.</li>        <li>            <h3>UI Options</h3>        </li>        <li>            <strong>Auto Refresh</strong> Allows option for enable/disable and a refresh interval in seconds set by default to 5 minutes.</li>        <li>            <strong>DestinyDB Tooltips</strong> Allows for taps or hovers to enable the tooltip, if disabled double tap or double click enables the tooltip.</li>        <li>            <strong>DestinyDB Mode</strong> When enabled clicking on an item will open a new tab showing you the full stats of the item.</li>        <li>            <strong>Auto Transfer Stacks</strong> When enabled you will not be prompted and the entire stack will be transferred (consumables, materials).</li>        <li>            <strong>Auto Pad Height</strong> When enabled the sections will automatically adjust height to align with each other.</li>        <li>            <strong>Drag and Drop</strong> When enabled you may drag and drop an item from one section to another, compatible with mobile and desktop.</li>        <li>            <strong>Auto Updates</strong> This option will ensure you always have the latest version of Tower Ghost, enable it to allow Tower Ghost to update itself when a new version is available.            <em>Note: If you are having problems with Auto Updates please try to disable and enable it again to clear the cache. thank you.</em>        </li>        <li>            <h3>Menu Options</h3>        </li>        <li>            <strong>View</strong> Toggle between different views first page is Weapons, second page is Armor, third page is General</li>        <li>            <strong>Tier</strong> Filter by the rarity of the item (rare, legendary, exotic) </li>        <li>            <strong>Set</strong> Preset collections from various activiies in Destiny for an easy to filter list </li>        <li>            <strong>Show Missing Items</strong> When a Set is enabled use this to show you what items you're missing from that set.</li>        <li>            <strong>Progress</strong>            <em>Missing Perks:</em> Items that do not have their perks completely filled.</li>        <li>            <strong>Progress</strong>            <em>Missing XP:</em> Items that have been completely filled with perks but are missing the gold border.</li>        <li>            <strong>Progress</strong>            <em>Maxed:</em> Items that have gold borders only.</li>        <li>            <strong>Damage</strong> Filter by burn type, kinetic is the default burn applied to all weapons if it's not arc, void or solar.</li>        <li>            <strong>Weapon</strong> Filter by type of weapon, this list will only show types you have in your inventory.</li>        <li>            <strong>Search Box</strong> Filter by the name of the item, or the name of the perk, or the description in the perk, even if the perk is not active. Also allows you to filter by light level, you may type 280 to find items only at light level 280, you may also use &gt;280 to find anything higher or &lt;280 for items below 280.</li>        <li>            <h3>View Options</h3>        </li>        <li>            <strong>Container Width</strong>            This option allows you to control how wide you would like the overall container to be, the default option ensures proper padding on both sides for large displays, this option will not affect the layout for most mobile displays but will work for most tablet displays.</li>        <li>            <strong>Vault Mode</strong>            The default option ensures that the Vault column is always as wide as all the other columns, setting it to Custom allows you to make the Vault column wider, do note that this option will not affect mobile displays only tablets and desktops.</li>        <li>            <strong>Vault Width</strong>            This option is only available under \x22Custom\x22 Vault Mode, setting this option will make the Vault column wider than the default 25%.</li>        <li>            <strong>Number of Columns</strong>            This option is only available under \x22Default\x22 Vault Mode, this option works as a matrix of column modes depending on your display.            <br> Each row has a designated tag (xs,sm,md,lg) they are ordered from smallest display to largest so mobile displays use xs portrait and sm landscape. Desktop displays most likely use md or lg tag, each tag is dependent upon your resolution so 1 or 2 out of the 4 rows only apply to your device. Example: You have a mobile display that currently shows 1 column portrait (xs) and 2 columns landscape (sm) and you'd like to change it to 1/3, what you do is set the second row (sm) to 3 so it'll display 1 | 3 | 3 | 4 instead of 1 | 2 | 3 | 4 buttons selected.        </li>        <li>            <strong>Vault Columns</strong>            This option allows you to choose how many columns of items you want to see for the Vault profile, the default is 4 with the option of fitting more icons per row as the number goes up.</li>        <li>            <strong>Vault Position</strong>            First/Left - The vault is displayed first on mobile, on the left side for wide displays. Last/Right - The vault is ordered last or on the right side for wide displays.</li>        <li>            <h3>Materials and Consumable Options</h3>        </li>        <li>            <strong>Normalize</strong> Equally distribute consumables/materials across selected characters.</li>        <li>            <strong>Consolidate</strong> Move all of a certain consumable/material to a character.</li>        <li>            <strong>Don't ask again</strong> Enables Auto Transfer Stacks in Settings bypassing the prompt every time.</li>        <li>            <h3>Character Options</h3> More information can be found under help Guides <i>Using the stats tool effectively</i></li>        <li>            <strong>Light</strong> Equip the armor and weapons with the most Light points from any character or vault.</li>        <li>            <strong>Skill (Int/Disc/Str)</strong> Optimize armor for Tier 5 for that skill, ensure skill doesn't go too much over 300 points, if so it will automatically reduce the skill to arond 300 and buff the other stats.</li>        <li>            <strong>Most Points</strong> Optimize armor for the set that contains the most combined stat points.</li>        <li>            <strong>Best Combo</strong> Optimize armor for the set that has the most combined tiers available, if multiple tiers available a prompt will ask you which armor build you'd like to use.</li>    </ul></div>";
_.templates["languagesTemplate"] = "<div class=\x22row button-group\x22>    <% languages.forEach(function(language){ %>        <div class=\x22col-xs-12 col-sm-8 col-md-8 col-lg-6 text-center\x22>            <button class=\x22btn-setLanguage btn btn-lg btn-default <%= language.code == locale ? 'btn-primary' : '' %>\x22 value=\x22<%= language.code %>\x22>                <%= language.description %>            </button>        </div>        <% }) %></div>";
_.templates["normalizeTemplate"] = "<div id=\x22menu\x22>    <div class=\x22panel list-group\x22>        <div class=\x22list-group-item row\x22>            <div class=\x22item-name col-xs-24 col-sm-24 col-md-24 col-lg-24\x22>                <p>Normalize: equally distribute                    <%= item.description %> across the selected characters</p>            </div>            <div class=\x22item-name col-xs-24 col-sm-24 col-md-24 col-lg-24\x22>                <p>Consolidate: Transfer all quantities of                    <%= item.description %> across the selected characters to this character.</p>            </div>        </div>        <div id=\x22opt1\x22 class=\x22collapse in\x22>            <div class=\x22list-group-item row\x22>                <div class=\x22locations col-xs-24 col-sm-24 col-md-24 col-lg-24\x22>                    <div class=\x22move-button col-xs-4 col-sm-4 col-md-4 col-lg-4\x22>                        <div class=\x22attkIcon\x22>                            <!-- <div class=\x22icon-banner\x22><%= item.description %></div> -->                            <img src=\x22<%= item.icon %>\x22>                            <div class=\x22lower-left\x22 id=\x22total\x22>                                <%= total %>                            </div>                        </div>                    </div>                    <div class=\x22move-button col-xs-4 col-sm-4 col-md-4 col-lg-4\x22>                        <!-- padding -->                    </div>                    <% for (i = 0; i < characters.length; i++){ %>                        <div class=\x22move-button col-xs-4 col-sm-4 col-md-4 col-lg-4\x22 id=\x22char<%= i %>\x22>                            <div class=\x22attkIcon\x22>                                <div class=\x22icon-banner\x22>                                    <%= characters[i].classType() %>                                </div>                                <% if (selected[characters[i].id] == true){ %>                                    <img src=\x22<%= characters[i].icon() %>\x22 style=\x22border:3px solid yellow\x22 id=\x22char<%= i %>img\x22>                                    <% } else { %>                                        <img src=\x22<%= characters[i].icon() %>\x22 style=\x22border:none\x22 id=\x22char<%= i %>img\x22>                                        <% } %>                                            <div class=\x22lower-left\x22>                                                <%= characters[i].classLetter() %>                                            </div>                            </div>                        </div>                        <% } %>                </div>            </div>        </div>    </div></div>";
_.templates["perksTemplate"] = "<div class=\x22destt-talent\x22>    <% perks.forEach(function(perk){ %>        <div class=\x22destt-talent-wrapper\x22>            <div class=\x22destt-talent-icon\x22>                <img src=\x22<%= perk.iconPath %>\x22 data-name=\x22<%= perk.name %>\x22 width=\x2236\x22>            </div>            <div class=\x22destt-talent-description\x22 style=\x22color: <%= perk.active == true ? 'white' : 'gray' %>\x22>                <%= perk.description %>            </div>        </div>        <% }) %></div>";
_.templates["selectMultiCharactersTemplate"] = "<div id=\x22menu\x22>    <div class=\x22panel list-group\x22>        <div class=\x22list-group-item row\x22>            <div class=\x22item-name col-xs-24 col-sm-24 col-md-24 col-lg-24\x22>                <p>                    <%= description %>                </p>            </div>        </div>        <div id=\x22opt1\x22 class=\x22collapse in\x22>            <div class=\x22list-group-item row\x22>                <div class=\x22locations col-xs-24 col-sm-24 col-md-24 col-lg-24\x22>                    <div class=\x22move-button col-xs-4 col-sm-4 col-md-4 col-lg-4\x22>                        <!-- padding -->                    </div>                    <% for (i = 0; i < characters.length; i++){ %>                        <div class=\x22move-button col-xs-4 col-sm-4 col-md-4 col-lg-4\x22 id=\x22char<%= i %>\x22>                            <div class=\x22attkIcon\x22>                                <div class=\x22icon-banner\x22>                                    <%= characters[i].classType() %>                                </div>                                <% if (selected[characters[i].id] == true){ %>                                    <img src=\x22<%= characters[i].icon() %>\x22 style=\x22border:3px solid yellow\x22 id=\x22char<%= i %>img\x22>                                    <% } else { %>                                        <img src=\x22<%= characters[i].icon() %>\x22 style=\x22border:none\x22 id=\x22char<%= i %>img\x22>                                        <% } %>                                            <div class=\x22lower-left\x22>                                                <%= characters[i].classLetter() %>                                            </div>                            </div>                        </div>                        <% } %>                </div>            </div>        </div>    </div></div>";
_.templates["statsTemplate"] = "<div class=\x22destt-stat\x22>    <% Object.keys(stats).forEach(function(key){ %>        <div class=\x22stat-bar\x22>            <div class=\x22stat-bar-label\x22>                <%= key %>            </div>            <div class=\x22stat-bar-static-value\x22>                <%= stats[key] %>            </div>            <div class=\x22stat-bar-empty\x22>                <div style=\x22width:<%= stats[key] %>%\x22 class=\x22stat-bar-fill\x22></div>            </div>            <div class=\x22stat-bar-value\x22>                <%= stats[key] %>            </div>        </div>        <% }) %></div>";
_.templates["swapTemplate"] = "<p>Tip: You may click on a swap item to cycle through alternative replacements. </p><ul class=\x22list-group\x22>    <% swapArray.forEach(function(pair){ %>        <li class=\x22list-group-item\x22>            <div class=\x22row\x22>                <div class=\x22text-center col-xs-24 col-sm-24 col-md-24 col-lg-12\x22>                    <%= pair.description %>                </div>                <div class=\x22text-right col-xs-10 col-sm-10 col-md-10 col-lg-4\x22><a class=\x22item\x22 href=\x22<%= pair.targetItem && pair.targetItem.href %>\x22><img class=\x22itemImage\x22 src=\x22<%= (pair.targetItem && pair.targetItem.icon) || pair.targetIcon %>\x22></a></div>                <div class=\x22text-center col-xs-4 col-sm-4 col-md-4 col-lg-4\x22>                    <img src=\x22<%= pair.actionIcon %>\x22>                </div>                <div class=\x22text-left col-xs-10 col-sm-10 col-md-10 col-lg-4\x22><a class=\x22swapItem item\x22 href=\x22<%= pair.swapItem && pair.swapItem.href %>\x22 instanceid=\x22<%= pair.swapItem && pair.swapItem._id %>\x22><img class=\x22itemImage\x22 src=\x22<%= (pair.swapItem && pair.swapItem.icon) || pair.swapIcon %>\x22></a></div>            </div>        </li>        <% }) %></ul>";
_.templates["tooltipsIconTemplate"] = "<span class=\x22fh-icon des-icon small icon-inline no-border\x22>    <a class=\x22inner\x22 href=\x22http://www.destinydb.com/items/<%= item.itemHash %>\x22>        <span class=\x22effect\x22></span>        <span class=\x22bg\x22 style=\x22background-image:url(<%= tgd.dataDir + item.icon %>)\x22></span>        <span class=\x22border\x22></span>    </a>    <span class=\x22outer\x22></span></span>";
_.templates["tooltipsTemplate"] = "<div class=\x22fhtt des des-item\x22>    <div class=\x22destt-cont\x22>        <div class=\x22destt-title destt-bg-<%= item.tierType %>\x22 style=\x22background-image:url(<%= tgd.dataDir + item.icon %>)\x22>            <h2 class=\x22destt-has-icon\x22></h2>            <h3 class=\x22destt-title-quality\x22></h3>            <h3 class=\x22destt-has-icon\x22></h3>            <div class=\x22clearfix\x22></div>        </div>        <div class=\x22destt-desc\x22></div>        <div class=\x22destt-info\x22>            Type:            <span>                <%= unescape(item.itemTypeName) %>            </span>,        </div>        <div class=\x22clearfix\x22></div>    </div>    <div class=\x22destt-right\x22></div>    <div class=\x22destt-bottomright\x22></div>    <div class=\x22destt-bottom\x22></div></div>";
_.templates["whatsNewTemplate"] = "Version:<%= tgd.version %>    <br>    <ul>        <li>3.7.5.8 - Improved toaster notifications by reducing the amount of notifications during a refresh, adjusting the position when it's shown, and tweaked the delay for various messages</li>        <li>3.7.5.7 - Various fixes for the tooltip perks, stats and display for certain SRL gear.</li>        <li>3.7.5.5 - Added an option to consolidate from the Extras menu for Consumables</li>        <li>3.7.5.4 - Added a new set of filters to Armor dropdown including filtering armor by weapons equipped, the subclass equipped and the character class type.</li>        <li>3.7.4.1 - Fixed a problem with loading when Auto Updater was enabled for certain desktop platforms</li>        <li>3.7.4.0 - Restructured the way the Tower Ghost loads for certain desktop platforms</li>        <li>3.7.1.2 - Removed image loading code until a better solution can be implemented</li>        <li>3.7.0.7 - Improved app performance by only loading the item images when they are within view</li>        <li>3.7.0.5 - Fixed the top left button \x22TGD\x22 to properly display the What's New section</li>        <li>3.7.0.4 - Fixed tooltips perks not showing in all platforms</li>        <li>3.7.0.3 - Tooltips will now scale better for mobile devices</li>        <li>3.7.0.2 - Fixed iPad landscape start up issue</li>        <li>3.7.0.1 - Fixed broken tooltips after new Bungie update</li>        <li>3.7.0.0 - Updated database to the latest Bungie definitions</li>        <li>3.6.8.8 - Improved tooltips to ensure they always load including remote data issue</li>        <li>3.6.8.7 - Fixes for an improved Auto Refresh setting</li>        <li>3.6.8.6 - Further optimizing Tower Ghost to reduce file sizes and loading times</li>        <li>3.6.8.5 - Equip Best Combo is now sorted by highest available tiers descending</li>        <li>3.6.8.3 - Improved the auto updates download event from notifications to a dedicated loading bar</li>        <li>3.6.8.2 - Mobile tweak to prevent user from being able to select/highlight text when holding it down</li>        <li>3.6.8.1 - Added the Horn bucket to the General view right below Sparrow</li>        <li>3.6.8 - Updated definitions to include the new Sparrow Racing League items</li>        <li>3.6.7.2 - Improved the swap pop up to allow the Transfer button to be activated with the Enter key</li>        <li>3.6.7 - Fixed a problem in 3.6.6.x where auto updates weren't working properly</li>        <li>3.6.6.6 - Equip with highest light will not change currently equipped gear if it's the same light level</li>        <li>3.6.6.4 - Fixed a problem where images not stored in local cache wouldn't load remotely</li>        <li>3.6.6.1 - Fixed a problem with Ghost shells and transfers</li>        <li>3.6.6 - Optimized project to reduce loading times, file sizes and auto update download times</li>        <li>3.6.5.6 - Improved Set filter to include Year 1 and Year 2 items</li>        <li>3.6.5.4 - Fixed a transfer bug that would happen when the vault became full.</li>        <li>3.6.5.3 - Added \x22TTK Items\x22 to the Set drop down to be able to filter only Y2 items</li>        <li>3.6.5.2 - Updated Help documentation to make sure it's up to date with all the latest information</li>        <li>3.6.5.1 - Equip with Highest \x22Best Combo\x22 now allows you to select from multiple builds of the highest tiers</li>        <li>3.6.3 - Adjusted the portrait layout for certain devices to display one column</li>        <li>3.6.2 - Auto Updater is now more reliable, please disable and enable to ensure latest version</li>        <li>3.6.1.4 - Improved updater to provide feedback during download process</li>        <li>3.6.1.3 - Fixed a problem with tooltips when Auto Updated for desktop platforms</li>        <li>3.6.1.2 - Improved the refresh for characters so that a notification is displayed during the process</li>        <li>3.6.1.1 - Added the Refer a Friend reward items to the definitions</li>        <li>3.6.1 - Fixed the logic for Equip with Highest to also take into consideration the exotic faction class items</li>        <li>3.6.0.6 - Added the ability to use the search box to filter by light level, use &gt;300 or &lt;300 for filtering by range</li>        <li>3.6.0.5 - Added the ability to filter by Engrams from the General filter</li>        <li>3.6.0.4 - Fixed an issue with the with the analytics code</li>        <li>3.6.0.3 - Updated sets to include No Time to Explain for Exotic Weapons</li>        <li>3.6.0 - Introducing 4 digit version numbers for auto updates</li>        <li>3.5.9 - Fixed consumables not working on single tap</li>        <li>3.5.8 - Fixed characters not loading after the Bungie 11/17 update</li>        <li>3.5.7 - Fixed the search box resetting the app</li>        <li>3.5.6 - Fixed the Progress Missing Perks filter for Weapons</li>    </ul>";
