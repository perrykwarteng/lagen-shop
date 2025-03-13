import { DeliveryProcess } from "@/components/DeliveryProcess/page";
import { FaqWhite } from "@/components/FaqWhite/page";
import Layout from "@/components/Layout/layout";
import Link from "next/link";

export default function ReturnAndExchange() {
  return (
    <>
      <Layout>
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="text-center">
            <h2 className="text-[20px] md:text-[30px] py-3">
              RETURN & EXCHANGES
            </h2>
            <p className="py-2">We want you to absolutely love your Zimi!</p>
            <p className="py-2">
              Need to make a return? No worries! We’re here to make things as
              easy as possible. If you change your mind for any reason, you are
              welcome to return it back to us within 15 days of receiving your
              order.
            </p>
            <Link className="underline text-[18px] md:text-[20px]" href="">
              CLICK HERE TO LODGE A RETURN
            </Link>
          </div>

          <div className="">
            <h3 className="font-medium py-2 mt-3">Change of Mind Returns:</h3>
            <h3 className="font-medium py-2">
              If your new item is not quite right, we have the following return
              options available, in accordance with our policies and your rights
              under the Australian Consumer Law (ACL):
            </h3>
            <ul className="list-disc">
              <li>
                All full price items can be returned for either an exchange,
                refund or store credit subject to the conditions below:
              </li>
              <li>
                End Of Season Sale items and items purchased under a promotion
                can be returned for a store credit or exchange only, subject to
                the conditions below. Please note: Refundid Instant Refunds are
                not available on orders that contain Sale Items.
              </li>
              <li>
                Online orders can only be returned to our warehouse.
                Unfortunately, our retail stores cannot process returns or
                exchanges for online orders.
              </li>
            </ul>
            <p className="py-3">
              Mister Zimi reserves the right to deny a change of mind return if
              it does not meet the following conditions:
            </p>

            <ul className="list-disc">
              <li>
                You must provide valid proof of purchase (e.g. a receipt or
                credit or debit card statement){" "}
              </li>
              <li>
                Your return is initiated within 15 days of you receiving your
                online order, or 15 days after purchase for in-store purchases
              </li>
              <li>
                Return authorisation has been approved via the online returns
                portal
              </li>
              <li>
                Your return is sent back within 10 days of being approved by
                Mister Zimi
              </li>
              <li>
                Item(s) are in original condition (unworn and unwashed with all
                tags attached)
              </li>
              <li>
                Swimwear must be tried on with underwear and returned with the
                adhesive strip in place. In the interests of hygiene, returns
                may not be accepted if this strip has been removed or where it
                is obvious the items have been worn and may be sent back to the
                customer
              </li>
              <li>
                Zimi Eyewear must be returned in new and unused condition with
                all protective and product packaging intact, such as sunglass
                pouch and box.
              </li>
              <li>The shipping cost to return item(s) is payable by you</li>
            </ul>

            {/* Faulty Products */}
            <h3 className="font-medium py-2 mt-3">Faulty Product Items:</h3>
            <h3 className="font-medium py-2">
              We sincerely apologise for any inconvenience caused by receiving a
              faulty garment. Please contact our Customer Care team
              online@misterzimi.com with your order number and images of the
              fault and we will work with you to resolve it as soon as possible.
            </h3>
            <ul className="list-disc">
              <li>
                For all returns of faulty products, you must provide a valid
                proof of purchase (e.g. a receipt or credit or debit card
                statement)
              </li>
              <li>
                If your product is faulty, you can return it to us and choose to
                receive either a refund or a replacement
              </li>
              <li>
                Please note that items which are damaged or as a result of
                normal wear and tear; by accident; failure to use in accordance
                with care instructions; or through misuse will not be considered
                faulty
              </li>
              <li>
                Mister Zimi's faulty product return policy only covers products
                for two years
              </li>
            </ul>

            {/* Submmitting Returns */}
            <h3 className="font-medium py-2 mt-3">Submitting a return:</h3>
            <h3 className="font-medium py-2">Ghana / Domestic Returns</h3>
            <ul className="list-disc">
              <li>
                Please submit your return request via our Returns Portal and
                follow the prompts
              </li>
              <li>
                If your product is faulty, you are entitled to reject can't be
                returned without significant cost to you, let us know and we'll
                arrange collection at our expense. Otherwise you will need to
                cover the cost of returning the product to us. Once the return
                is confirmed, we will reimburse your postage or shipping costs
              </li>
              <li>
                You can arrange shipping for a product return through our easy
                Returns Portal at a flat rate of AUD $10 per return. Shipping is
                fully insured and traceable on our end
              </li>
              <li>
                Once your return request has been approved in the portal, use
                the return shipping label that can be printed using the portal
                to send the item(s) back to us at the below address
              </li>
            </ul>
            <ul>
              <li>La’gen Returns</li>
              <li>PO BOX 815</li>
              <li>Port Melbourne, </li>
              <li>VIC 3207</li>
            </ul>
            {/* Us Returns */}
            <h3 className="font-medium py-2">USA Returns</h3>
            <ul className="list-disc">
              <li>
                Please submit your return request via our Returns Portal and
                follow the prompts
              </li>
              <li>
                If your product is faulty, you are entitled to reject can't be
                returned without significant cost to you, let us know and we'll
                arrange collection at our expense. Otherwise you will need to
                cover the cost of returning the product to us. Once the return
                is confirmed, we will reimburse your postage or shipping costs
              </li>
              <li>
                You can arrange shipping for a product return through the
                Returns Portal at a flat rate of USD $10 per return (around $15
                AUD). Shipping is fully insured and traceable on our end
              </li>
              <li>
                Once your return request has been approved in the portal, use
                the return shipping label that can be printed using the portal
                to send the item(s) back to us via the USA Returns Consolidation
                address below:
              </li>
            </ul>
            <ul>
              <li>SEKO Logistics</li>
              <li>2270 East 220th</li>
              <li>StreetCarson</li>
              <li>GA 90810</li>
            </ul>
            <ul className="list-disc mt-2">
              <li>
                If your product return label isn’t printing or is showing an
                error, please double check your details (this may be due to a
                simple spelling error, mismatching postcode or missing digits)
              </li>
              <li>
                If you don't arrange shipping using our preferred shipping
                service, please ensure you use a protective bag and a
                registered/traceable form of postage as Mister Zimi will not be
                responsible for goods that are damaged or lost in transit from
                you to us. You must include details of your order number and
                email address used to place the order in your return
              </li>
            </ul>

            <h3 className="font-medium py-2">Rest of the World Returns</h3>
            <ul className="list-disc">
              <li>
                Please submit your return request via our Returns Portal and
                follow the prompts to lodge your return for a refund or store
                credit, unfortunately we are unable to offer exchanges for rest
                of the world returns
              </li>
              <li>
                For change of mind purchases or other non-faulty returns, you
                are required to organise and pay for return shipping
              </li>
              <li>
                If there is a problem or fault with your item, please contact us
                at online@misterzimi.com with your order number and images of
                the fault and we will work with you to resolve it as soon as
                possible
              </li>
              <li>
                The cost of return shipping for faulty items will be reimbursed
                to you in full where you have an approved faulty return
              </li>
            </ul>

            <ul className="my-2">
              <li>La’gen Returns</li>
              <li>PO BOX 815</li>
              <li>Port Melbourne, </li>
              <li>VIC 3207</li>
            </ul>

            <ul className="list-disc">
              <li>
                Please ensure you use a protective bag and a
                registered/traceable form of postage as Mister Zimi will not be
                responsible for goods that are damaged or lost in transit from
                you to us
              </li>
            </ul>
            <p className="mt-2"> All Returns </p>
            <p>
              You will receive an email notification once your return is
              received and processed. Store credits and refunds are issued
              instantly on our end, but refunds can sometimes take up to 15
              business days to be processed by your bank.
            </p>
            <p>
              All returns will be processed via the same payment method as the
              original payment. If the original payment method is no longer
              available, Mister Zimi may issue a refund (where required) via an
              alternative method.
            </p>

            {/* FAQs */}
            <div className="mt-16">
              <div className="my-1.5">
                <FaqWhite
                  title="WHAT IS YOUR IN-STORE RETURNS POLICY?"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="CAN I RETURN ONLINE ORDERS IN-STORE?"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="CAN I EXCHANGE MY ONLINE ORDER?"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="CAN I USE REFUNDED STORE CREDIT ONLINE & IN-STORE?"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="RETURNING ITEMS WITHOUT A RECEIPT"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="AFTERPAY REFUND POLICY"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
              <div className="my-1.5">
                <FaqWhite
                  title="RETURNING AN ITEM YOU WERE GIFTED"
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus aliquam fuga id vero quaerat cupiditate quas repellendus voluptatibus voluptates?"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <DeliveryProcess />
        </div>
      </Layout>
    </>
  );
}
