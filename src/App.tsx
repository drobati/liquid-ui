import { useState } from "react";
import { motion } from "motion/react";
import {
  Sun,
  Moon,
  Bell,
  Settings,
  User,
  LogOut,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  Terminal,
  AlertCircle,
  ChevronDown,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const tableData = [
  { name: "Olivia Martin", initials: "OM", email: "olivia@example.com", status: "Active", amount: "$1,999.00", date: "2026-02-15" },
  { name: "Jackson Lee", initials: "JL", email: "jackson@example.com", status: "Active", amount: "$1,499.00", date: "2026-02-12" },
  { name: "Isabella Nguyen", initials: "IN", email: "isabella@example.com", status: "Inactive", amount: "$799.00", date: "2026-02-08" },
  { name: "William Kim", initials: "WK", email: "william@example.com", status: "Active", amount: "$2,499.00", date: "2026-02-05" },
  { name: "Sofia Davis", initials: "SD", email: "sofia@example.com", status: "Pending", amount: "$399.00", date: "2026-02-01" },
];

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function App() {
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground liquid-bg">
        {/* Header — sticky frosted glass with signature shadow */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl shadow-[0_3px_0_oklch(0.35_0.15_264/0.15)]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-5">
              <a href="/docs/" className="text-xl font-extrabold tracking-tight liquid-wordmark hover:opacity-80 transition-opacity">
                Liquid UI
              </a>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleDark}>
                    {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle theme</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                      3
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content — staggered entrance */}
        <motion.main
          className="mx-auto max-w-6xl px-6 py-10 space-y-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Tabs + Stat Cards */}
          <motion.div variants={rise} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <motion.div
                  className="grid gap-5 md:grid-cols-3"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={rise} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <Card className="transition-shadow hover:shadow-[0_5px_0_oklch(0.35_0.15_264/0.18)]">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold tracking-tight">$45,231.89</div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            +20.1%
                          </Badge>
                          <span className="text-xs text-muted-foreground">from last month</span>
                        </div>
                        <Progress value={72} className="mt-3" />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={rise} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <Card className="transition-shadow hover:shadow-[0_5px_0_oklch(0.35_0.15_264/0.18)]">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold tracking-tight">+2,350</div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            +180.1%
                          </Badge>
                          <span className="text-xs text-muted-foreground">from last month</span>
                        </div>
                        <Progress value={58} className="mt-3" />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={rise} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <Card className="transition-shadow hover:shadow-[0_5px_0_oklch(0.35_0.15_264/0.18)]">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold tracking-tight">+573</div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="text-xs">
                            <TrendingUp className="mr-1 h-3 w-3" />
                            +201
                          </Badge>
                          <span className="text-xs text-muted-foreground">since last hour</span>
                        </div>
                        <Progress value={89} className="mt-3" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* Data Table */}
                <motion.div variants={rise} transition={{ duration: 0.5, ease: "easeOut" }}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>A list of your recent transactions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="w-[50px]" />
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((row) => (
                            <TableRow key={row.email}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarFallback className="text-xs">{row.initials}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">{row.name}</div>
                                    <div className="text-xs text-muted-foreground">{row.email}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    row.status === "Active"
                                      ? "default"
                                      : row.status === "Pending"
                                        ? "secondary"
                                        : "outline"
                                  }
                                >
                                  {row.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-muted-foreground">{row.date}</TableCell>
                              <TableCell className="text-right font-medium">{row.amount}</TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View</DropdownMenuItem>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Detailed analytics data coming soon.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <Skeleton className="h-[200px] w-full rounded-xl" />
                      <div className="flex gap-4">
                        <Skeleton className="h-4 flex-1" />
                        <Skeleton className="h-4 flex-1" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generated reports will appear here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <Skeleton className="h-[200px] w-full rounded-xl" />
                      <Skeleton className="h-4 w-[60%]" />
                      <Skeleton className="h-4 w-[40%]" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Settings Form */}
          <motion.div variants={rise} transition={{ duration: 0.5, ease: "easeOut" }}>
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input id="name" placeholder="Enter your name" defaultValue="Derek Robati" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern (EST)</SelectItem>
                        <SelectItem value="cst">Central (CST)</SelectItem>
                        <SelectItem value="mst">Mountain (MST)</SelectItem>
                        <SelectItem value="pst">Pacific (PST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." />
                </div>

                <div className="space-y-4">
                  <Label>Notification Preferences</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="email-notif" defaultChecked />
                      <Label htmlFor="email-notif" className="font-normal">Email notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="push-notif" />
                      <Label htmlFor="push-notif" className="font-normal">Push notifications</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Plan</Label>
                  <RadioGroup defaultValue="pro">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="plan-free" />
                      <Label htmlFor="plan-free" className="font-normal">Free</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pro" id="plan-pro" />
                      <Label htmlFor="plan-pro" className="font-normal">Pro ($9/mo)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enterprise" id="plan-enterprise" />
                      <Label htmlFor="plan-enterprise" className="font-normal">Enterprise</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing emails</Label>
                    <p className="text-sm text-muted-foreground">Receive emails about new features.</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Volume</Label>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={1} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Feedback */}
          <motion.div
            className="grid gap-5 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div className="space-y-4" variants={rise} transition={{ duration: 0.45, ease: "easeOut" }}>
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Deployment successful!</AlertTitle>
                <AlertDescription>
                  Your app has been deployed to production.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Payment failed</AlertTitle>
                <AlertDescription>
                  Your card was declined. Please update your payment method.
                </AlertDescription>
              </Alert>
            </motion.div>

            <motion.div variants={rise} transition={{ duration: 0.45, ease: "easeOut" }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirm Action</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to proceed? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="secondary">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Notifications</SheetTitle>
                        <SheetDescription>
                          Your recent notifications and updates.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-6 space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">U{i}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">Notification {i}</p>
                              <p className="text-xs text-muted-foreground">
                                Something happened {i} hours ago.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        Quick Info
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">System Status</h4>
                        <p className="text-sm text-muted-foreground">
                          All systems are operational. Last checked 2 minutes ago.
                        </p>
                        <Progress value={100} />
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={rise}
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>What is Liquid UI?</AccordionTrigger>
                    <AccordionContent>
                      Liquid UI is a React component library built with TypeScript, Tailwind CSS,
                      and Framer Motion. It provides animated, accessible UI components with a
                      signature raised-shadow style.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>How do I install components?</AccordionTrigger>
                    <AccordionContent>
                      You can install individual components using the shadcn CLI. Run{" "}
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">
                        pnpm dlx shadcn@latest add button
                      </code>{" "}
                      to add a component.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Toggle the moon icon in the header to switch between light and dark mode.
                      All components adapt automatically through CSS variables.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>Can I customize the theme?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely. All colors are defined as CSS custom properties using the OKLCh
                      color space. Edit <code className="text-sm bg-muted px-1 py-0.5 rounded">src/index.css</code> to
                      change any color in the palette.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={rise}
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Separator />
            <footer className="py-10 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Built with
                <span className="font-bold liquid-wordmark">Liquid UI</span>
              </div>
              <p className="text-xs text-muted-foreground/60">
                26 components. Signature shadows. Dark mode. Open source.
              </p>
            </footer>
          </motion.div>
        </motion.main>
      </div>
    </TooltipProvider>
  );
}

export default App;
